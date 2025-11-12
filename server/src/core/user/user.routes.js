const router = require('express').Router();
const controller = require('./user.controller');
const auth = require('../../middleware/auth');
const requirePermission = require('../../middleware/permission');

router.post('/', auth, requirePermission('User.create'), controller.createUser);
router.get('/', auth, requirePermission('User.view'), controller.listUsers);
router.post('/:id/assign-role', auth, requirePermission('User.assignRole'), controller.assignRole);

module.exports = router;