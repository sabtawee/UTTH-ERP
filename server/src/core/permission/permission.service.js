const prisma = require('../../config/db');

exports.create = (data) => {
  return prisma.permission.create({ data });
};

exports.list = () => {
  return prisma.permission.findMany();
};
