var express = require('express');
var router = express.Router();

const kite_controlers= require('../controllers/kite');
/* GET kite */
router.get('/', kite_controlers.kite_view_all_Page );

module.exports = router;
