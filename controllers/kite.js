var kite = require('../models/kite');
// List of all kite
exports.kite_list = function(req, res) {
 res.send('NOT IMPLEMENTED: kite list');
};
// for a specific kite.
exports.kite_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: kite detail: ' + req.params.id);
};
// Handle kite create on POST.
exports.kite_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: kite create POST');
};
// Handle kite delete form on DELETE.
exports.kite_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: kite delete DELETE ' + req.params.id);
};
// Handle kite update form on PUT.
exports.kite_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: kite update PUT' + req.params.id);
};
// List of all kite
exports.kite_list = async function(req, res) {
    try{
    thekite = await kite.find();
    res.send(thekite);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // VIEWS
// Handle a show all view
exports.kite_view_all_Page = async function(req, res) {
    try{
    thekite = await kite.find();
    res.render('kite', { title: 'kite Search Results', results: thekite });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
    
