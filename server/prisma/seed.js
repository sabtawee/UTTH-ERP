const { PrismaClient } = require("./generated/client_app");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

async function main() {
  const hash = await bcrypt.hash("SuperSecret123", 10);

  const superRole = await prisma.webmes_Role.upsert({
    where: { name: "SUPER_ADMIN" },
    update: {},
    create: {
      name: "SUPER_ADMIN",
      description: "Super admin can do anything",
    },
  });

  const superPerm = await prisma.webmes_Permission.upsert({
    where: {
      name_module: {
        name: "*",
        module: "*",
      },
    },
    update: {},
    create: {
      name: "*",
      module: "*",
    },
  });

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

  const user = await prisma.webmes_User.upsert({
    where: { email: "superadmin@yourdomain.com" },
    update: {},
    create: {
      email: "superadmin@yourdomain.com",
      password: hash,
      fullName: "Super Admin",
      employeeId: "T00000",
      department: "IT",
    },
  });

  await prisma.webmes_UserRole.upsert({
    where: {
      userId_roleId: {
        userId: user.id,
        roleId: superRole.id,
      },
    },
    update: {},
    create: {
      userId: user.id,
      roleId: superRole.id,
    },
  });
}

main().finally(() => prisma.$disconnect());
