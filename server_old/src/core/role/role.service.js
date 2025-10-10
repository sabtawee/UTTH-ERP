const prisma = require('../../config/db');

exports.createRole = async (data) => {
  return prisma.role.create({ data });
};

exports.listRoles = () => {
  return prisma.role.findMany({
    include: {
      permissions: {
        include: { permission: true },
      },
    },
  });
};

exports.assignPermissions = async (roleId, permissionIds) => {
  await prisma.rolePermission.deleteMany({ where: { roleId } });
  await prisma.rolePermission.createMany({
    data: permissionIds.map((permissionId) => ({ roleId, permissionId })),
  });
};
