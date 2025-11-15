const { PrismaClient } = require("./generated/client_app");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

async function main() {
  const hash = await bcrypt.hash("SuperSecret123", 10);

  // ----------------------
  // 1) Create SUPER_ADMIN role
  // ----------------------
  const superRole = await prisma.webmes_Role.upsert({
    where: { name: "SUPER_ADMIN" },
    update: {},
    create: {
      name: "SUPER_ADMIN",
      description: "Super admin can do anything",
    },
  });

  // ----------------------
  // 2) Create wildcard permission (*)
  // ----------------------
  const superPerm = await prisma.webmes_Permission.upsert({
    where: {
      code: "*",
    },
    update: {},
    create: {
      code: "*",
      module: "*",
      description: "Full system access",
    },
  });

  // ----------------------
  // 3) Link role ↔ permission
  // ----------------------
  await prisma.webmes_RolePermission.upsert({
    where: {
      roleId_permissionId: {
        roleId: superRole.id,
        permissionId: superPerm.id,
      },
    },
    update: {},
    create: {
      roleId: superRole.id,
      permissionId: superPerm.id,
    },
  });

  // ----------------------
  // 4) Create SUPERADMIN user
  // ----------------------
  const superUser = await prisma.webmes_User.upsert({
    where: { username: "superadmin" },
    update: {},
    create: {
      username: "superadmin",
      fullName: "Super Administrator",
      email: "superadmin@yourdomain.com",
      department: "IT",
      plant: "HQ",
      section: "ADMIN",
      adDn: null,
      password: hash,         // only local login
      isActive: true,
    },
  });

  // ----------------------
  // 5) Assign SUPER_ADMIN role to user
  // ----------------------
  await prisma.webmes_UserRole.upsert({
    where: {
      userId_roleId: {
        userId: superUser.id,
        roleId: superRole.id,
      },
    },
    update: {},
    create: {
      userId: superUser.id,
      roleId: superRole.id,
    },
  });

  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
