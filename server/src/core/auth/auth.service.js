const prisma = require("../../config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { secret, expiresIn } = require("../../config/jwt");

exports.login = async ({ email, password }) => {
  const user = await prisma.webmes_User.findUnique({
    where: { email },
    include: {
      roles: {
        include: {
          role: {
            include: {
              permissions: {
                include: { permission: true },
              },
            },
          },
        },
      },
    },
  });

  if (!user) throw new Error("User not found");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Invalid password");

  const permissions = user.roles.flatMap((r) =>
    r.role.name === "SUPER_ADMIN"
      ? ["*.*"]
      : r.role.permissions.map(
          (p) => `${p.permission.module}.${p.permission.name}`
        )
  );

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      permissions,
    },
    secret,
    { expiresIn }
  );

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      department: user.department,
      roles: user.roles.map((r) => r.role.name),
      permissions,
    },
  };
};

exports.getProfile = async (userId) => {
  const user = await prisma.webmes_User.findUnique({
    where: { id: userId },
    include: {
      roles: {
        include: {
          role: {
            include: {
              permissions: {
                include: { permission: true },
              },
            },
          },
        },
      },
    },
  });

  if (!user) throw new Error("User not found");

  const permissions = user.roles.flatMap((r) =>
    r.role.permissions.map((p) => `${p.permission.module}.${p.permission.name}`)
  );

  return {
    id: user.id,
    email: user.email,
    fullName: user.fullName,
    department: user.department,
    roles: user.roles.map((r) => r.role.name),
    permissions,
  };
};
