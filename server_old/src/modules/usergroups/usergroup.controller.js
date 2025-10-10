const usergroupService = require('./usergroup.service');

exports.getUsergroups = async (req, res) => {
  try {
    const usergroups = await usergroupService.listUsergroups();
    res.json(usergroups);
  } catch (error) {
    console.error('Error fetching user groups:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
