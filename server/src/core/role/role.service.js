const prisma = require('../../config/db');

exports.createRole = async (data) => {
  return prisma.webmes_Role.create({ data });
};

exports.listRoles = () => {
  return prisma.webmes_Role.findMany({
    include: {
      permissions: {
        include: { permission: true },
      },
    },
  });
};

exports.assignPermissions = async (roleId, permissionIds) => {
  await prisma.webmes_RolePermission.deleteMany({ where: { roleId } });
  await prisma.webmes_RolePermission.createMany({
    data: permissionIds.map((permissionId) => ({ roleId, permissionId })),
  });
};
