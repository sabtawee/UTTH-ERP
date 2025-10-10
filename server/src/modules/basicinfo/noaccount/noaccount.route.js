const router = require('express').Router();
const ctrl = require('./noaccount.controller');
const auth = require('../../../middleware/auth');
const requirePermission = require('../../../middleware/permission');

router.get('/lines',       auth, requirePermission('NoAccount.view'),  ctrl.combo.lines);
router.get('/issue-types', auth, requirePermission('NoAccount.view'),  ctrl.combo.issueTypes);
router.get('/statuses',    auth, requirePermission('NoAccount.view'),  ctrl.combo.statuses);
router.get('/layers',      auth, requirePermission('NoAccount.view'),  ctrl.combo.layers);
router.get('/dc-mark',     auth, requirePermission('NoAccount.view'),  ctrl.combo.dcMark);
router.get('/routes',      auth, requirePermission('NoAccount.view'),  ctrl.combo.routes);
router.get('/route-rt',    auth, requirePermission('NoAccount.view'),  ctrl.combo.rtSerial);
router.get('/dc-control',  auth, requirePermission('NoAccount.view'),  ctrl.combo.dcControl);

router.post('/',           auth, requirePermission('NoAccount.create'), ctrl.create);

module.exports = router;
