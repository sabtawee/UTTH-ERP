const { PrismaClient } = require('../../prisma/generated/client_app');
const prisma = new PrismaClient();


module.exports = prisma;