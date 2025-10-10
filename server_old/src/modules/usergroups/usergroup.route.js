const express = require('express')
const router = express.Router();

const usergroupController = require('./usergroup.controller');

router.get('/', usergroupController.getUsergroups);

module.exports = router;


