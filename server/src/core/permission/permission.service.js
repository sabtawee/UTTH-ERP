const prisma = require('../../config/db');

exports.create = (data) => {
  return prisma.webmes_Permission.create({ data });
};

exports.list = () => {
  return prisma.webmes_Permission.findMany();
};
