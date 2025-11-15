const prisma = require("../../config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { secret, expiresIn } = require("../../config/jwt");
const ad = require('../../config/ad.config.js');

// ----------------------------------
// Extract OU → plant, section
// ----------------------------------
function extractPlantSection(dn) {
  const parts = dn.split(',').filter(p => p.includes('OU='));

  const section = parts[0]?.replace('OU=', '').trim() || null;
  const plant = parts[1]?.replace('OU=', '').trim() || null;

  return { plant, section };
}

// ==========================================================================================
// 1) LOCAL LOGIN (เดิม) — แต่วางโค้ดให้เป็นระเบียบมากขึ้น
// ==========================================================================================
exports.login = async ({ email, password }) => {
  const user = await prisma.webmes_User.findUnique({
    where: { email },
    include: {
      roles: {
        include: {
          role: {
            include: {
              permissions: { include: { permission: true } },
            },
          },
        },
      },
    },
  });

  if (!user) throw new Error("User not found");

  const valid = user.password && await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Invalid password");

  const permissions = buildPermissionList(user);

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      permissions,
      roles: user.roles.map(r => r.role.name)
    },
    secret,
    { expiresIn }
  );

  return {
    token,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      fullName: user.fullName,
      department: user.department,
      plant: user.plant,
      section: user.section,
      roles: user.roles.map((r) => r.role.name),
      permissions,
    },
  };
};

// =======================================================================
// Utility: สร้างรายการสิทธิ์ทั้งหมดในรูปแบบ "Module.Code"
// =======================================================================
function buildPermissionList(user) {
  return user.roles.flatMap((r) =>
    r.role.name === "SUPER_ADMIN"
      ? ["*.*"]
      : r.role.permissions.map((p) => `${p.permission.module}.${p.permission.code}`)
  );
}

// ==========================================================================================
// 2) AD LOGIN — ครบทุกอย่าง: Auth → Sync → Role → Permission
// ==========================================================================================
exports.loginAD = async (username, password) => {
  try {
    const upn = `${username}@th.pcbut.com`;

    // STEP 1: Authenticate with AD
    const auth = await new Promise((resolve, reject) => {
      ad.authenticate(upn, password, (err, auth) => {
        if (err) return reject(err);
        resolve(auth);
      });
    });

    if (!auth) throw new Error("Invalid username or password");

    // STEP 2: Get AD profile
    const adUser = await new Promise((resolve) => {
      ad.findUser(upn, (err, user) => {
        if (err || !user) return resolve(null);

        const { plant, section } = extractPlantSection(user.dn);

        resolve({
          username: user.sAMAccountName,
          fullName: user.displayName,
          email: user.mail,
          department: user.department,
          plant,
          section,
          adDn: user.dn
        });
      });
    });

    if (!adUser) throw new Error("AD user not found");

    // STEP 3: Auto Register or Sync user into DB
    let dbUser = await prisma.webmes_User.upsert({
      where: { username: adUser.username },
      update: {
        fullName: adUser.fullName,
        email: adUser.email,
        department: adUser.department,
        plant: adUser.plant,
        section: adUser.section,
        adDn: adUser.adDn
      },
      create: {
        username: adUser.username,
        fullName: adUser.fullName,
        email: adUser.email,
        department: adUser.department,
        plant: adUser.plant,
        section: adUser.section,
        adDn: adUser.adDn
      },
      include: {
        roles: {
          include: {
            role: {
              include: { permissions: { include: { permission: true } } }
            }
          }
        }
      }
    });

    // STEP 4: Build permission list
    const permissions = buildPermissionList(dbUser);

    // STEP 5: Create token
    const token = jwt.sign(
      {
        id: dbUser.id,
        username: dbUser.username,
        email: dbUser.email,
        fullName: dbUser.fullName,
        department: dbUser.department,
        plant: dbUser.plant,
        section: dbUser.section,
        roles: dbUser.roles.map(r => r.role.name),
        permissions
      },
      secret,
      { expiresIn }
    );

    return {
      token,
      user: {
        id: dbUser.id,
        username: dbUser.username,
        fullName: dbUser.fullName,
        email: dbUser.email,
        department: dbUser.department,
        plant: dbUser.plant,
        section: dbUser.section,
        roles: dbUser.roles.map(r => r.role.name),
        permissions
      }
    };

  } catch (error) {
    console.error("AD Login Error:", error);
    throw error;
  }
};

// ==========================================================================================
// 3) GET PROFILE
// ==========================================================================================
exports.getProfile = async (userId) => {
  const user = await prisma.webmes_User.findUnique({
    where: { id: userId },
    include: {
      roles: {
        include: {
          role: {
            include: {
              permissions: { include: { permission: true } },
            },
          },
        },
      },
    },
  });

  if (!user) throw new Error("User not found");

  const permissions = buildPermissionList(user);

  console.log("User Permissions:", permissions);

  return {
    id: user.id,
    username: user.username,
    email: user.email,
    fullName: user.fullName,
    department: user.department,
    plant: user.plant,
    section: user.section,
    roles: user.roles.map((r) => r.role.name),
    permissions,
  };
};
