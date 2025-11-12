const roleService = require('./role.service');

exports.createRole = async (req, res) => {
  const role = await roleService.createRole(req.body);
  res.json(role);
};

exports.listRoles = async (req, res) => {
  const roles = await roleService.listRoles();
  res.json(roles);
};

exports.assignPermission = async (req, res) => {
  const { id } = req.params;
  const { permissionIds } = req.body;
  await roleService.assignPermissions(Number(id), permissionIds);
  res.json({ message: 'Permissions assigned' });
};
