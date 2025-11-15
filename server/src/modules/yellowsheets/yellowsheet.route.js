const express = require('express');
const router = express.Router();


const yellowsheetController = require('./yellowsheet.controller');

// Route to get ERP yellowsheets
router.get('/:partnum/:revision/:layer', yellowsheetController.getErp_yspartnum);

module.exports = router;