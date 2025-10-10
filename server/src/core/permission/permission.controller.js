const permissionService = require('./permission.service');

exports.createPermission = async (req, res) => {
  const result = await permissionService.create(req.body);
  res.json(result);
};

exports.listPermissions = async (req, res) => {
  const permissions = await permissionService.list();
  res.json(permissions);
};
