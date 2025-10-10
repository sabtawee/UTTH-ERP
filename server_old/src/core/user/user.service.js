// const prisma = require('../../config/db');
// const bcrypt = require('bcrypt');

const { sql, mesPoolConnect, erpPoolConnect } = require('../../config/db.mssql');

exports.getUsersFromMES = async () => {
  const pool = await mesPoolConnect;
  const result = await pool.request().query('SELECT UserID, UserName, FullName, Email FROM Users');
  return result.recordset;
};

exports.getUsersFromERP = async () => {
  const pool = await erpPoolConnect;
  const result = await pool.request().query('select * from empbas_thai');
  return result.recordset;
};


// exports.createUser = async (data) => {
//   const hash = await bcrypt.hash(data.password, 10);
//   return prisma.user.create({
//     data: {
//       ...data,
//       password: hash,
//     },
//   });
// };

// exports.listUsers = () => {
//   return prisma.user.findMany({
//     include: {
//       roles: {
//         include: { role: true },
//       },
//     },
//   });
// };

// exports.assignRole = async (userId, roleIds) => {
//   await prisma.userRole.deleteMany({ where: { userId } });
//   await prisma.userRole.createMany({
//     data: roleIds.map((roleId) => ({ userId, roleId })),
//   });
// };
