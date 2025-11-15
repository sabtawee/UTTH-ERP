const authService = require('./auth.service');


exports.login = async (req, res) => {
  try {
    console.log('Login request body:', req.body);
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    const result = await authService.login(req.body);
    res.json(result);
  } catch (err) {
    console.error('Login error:', err);
    res.status(401).json({ message: err.message });
  }
};

exports.me = async (req, res) => {
  try {
    const result = await authService.getProfile(req.user.id);
    res.json(result);
  } catch (err) {
    console.error('Error fetching user profile:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.loginAD = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await authService.loginAD(username, password);

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password (AD)" });
    }

    res.json(user);

  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ error: err.message });
  }
};