const service = require('./user.service');

exports.getLocalUsers = async (req, res) => {
    try {
        const users = await service.getLocalUsers();
        res.json(users);
    } catch (error) {
        console.error('Error fetching local users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

