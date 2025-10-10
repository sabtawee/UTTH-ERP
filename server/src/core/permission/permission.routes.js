const router = require('express').Router();
const controller = require('./permission.controller');
const auth = require('../../middleware/auth');
const requirePermission = require('../../middleware/permission');

router.post('/', auth, requirePermission('Permission.create'), controller.createPermission);
router.get('/', auth, requirePermission('Permission.view'), controller.listPermissions);

module.exports = router;
