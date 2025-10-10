const router = require('express').Router();
const controller = require('./role.controller');
const auth = require('../../middleware/auth');
const requirePermission = require('../../middleware/permission');

router.post('/', auth, requirePermission('Role.create'), controller.createRole);
router.get('/', auth, requirePermission('Role.view'), controller.listRoles);
router.post('/:id/assign-permission', auth, requirePermission('Role.assignPermission'), controller.assignPermission);

module.exports = router;
