module.exports = {
  secret: process.env.JWT_SECRET || 'secretkey-dev',
  expiresIn: '1d',
};