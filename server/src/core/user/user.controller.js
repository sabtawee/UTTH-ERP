const userService = require('./user.service');

exports.createUser = async (req, res) => {
  try {
    const result = await userService.createUser(req.body);
    res.json(result);
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(400).json({ message: err.message });
  }
};


exports.listUsers = async (req, res) => {
  const users = await userService.listUsers();
  res.json(users);
};

exports.assignRole = async (req, res) => {
  const { id } = req.params;
  const { roleIds } = req.body;
  await userService.assignRole(Number(id), roleIds);
  res.json({ message: 'Roles assigned' });
};
