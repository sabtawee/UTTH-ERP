const prisma = require('../../config/db');
const bcrypt = require('bcrypt');

exports.createUser = async (data) => {
  const hash = await bcrypt.hash(data.password, 10);
  return prisma.webmes_User.create({
    data: {
      ...data,
      password: hash,
    },
  });
};

exports.listUsers = () => {
  return prisma.webmes_User.findMany({
    include: {
      roles: {
        include: { role: true },
      },
    },
  });
};

exports.assignRole = async (userId, roleIds) => {
  await prisma.userRole.deleteMany({ where: { userId } });
  await prisma.userRole.createMany({
    data: roleIds.map((roleId) => ({ userId, roleId })),
  });
};
