var express = require('express');
var router = express.Router();

const kite_controlers= require('../controllers/kite');
/* GET kite */
router.get('/', kite_controlers.kite_view_all_Page );

module.exports = router;

var express = require('express');
// const kite_controlers= require('../controllers/kite');
var router = express.Router();
/* GET kite */
router.get('/', kite_controlers.kite_view_all_Page );
/* GET detail kite page */
router.get('/detail', kite_controlers.kite_view_one_Page);
/* GET create costume page */
router.get('/create', kite_controlers.kite_create_Page);
/* GET create update page */
router.get('/update', kite_controlers.kite_update_Page);
/* GET delete costume page */
router.get('/delete', kite_controlers.kite_delete_Page);

module.exports = router;