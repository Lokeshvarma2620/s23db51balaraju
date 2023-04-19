var kite = require('../models/kite');

// List of all kite
exports.kite_list = function(req, res) {
    res.send('NOT IMPLEMENTED: kite list');
};
// for a specific Costume.
exports.kite_detail = function(req, res) {
res.send('NOT IMPLEMENTED: kite detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.kite_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: kite create POST');
};
// Handle Costume delete form on DELETE.
exports.kite_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: kite delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.kite_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: kite update PUT' + req.params.id);
};
// List of all kite
exports.kite_list = async function(req, res) {
    try{
        theD = await kite.find();
        res.send(theD);
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
}

//POST
// Handle Costume create on POST.
exports.kite_create_post = async function(req, res) {
    console.log(req.body)
    let document = new kite();
    document.kite_color = req.body.kite_color;
    document.kite_shape = req.body.kite_shape;
    document.kite_cost = req.body.kite_cost;

    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}
// for a specific Costume.
exports.kite_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await kite.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle Costume update form on PUT.
exports.kite_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await kite.findById( req.params.id)
    // Do updates of properties
    if(req.body.kite_color) toUpdate.kite_color = req.body.kite_color;
    if(req.body.kite_shape) toUpdate.kite_shape = req.body.kite_shape;
    if(req.body.kite_cost) toUpdate.kite_cost = req.body.kite_cost;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
    //for a specific Costume.
    exports.kite_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await kite.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    //Handle Costume update form on PUT.
exports.kite_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await kite.findById( req.params.id)
    // Do updates of properties
    if(req.body.kite_type)
    toUpdate.kite_type = req.body.kite_type;
    if(req.body.kite_color) toUpdate.kite_color = req.body.kite_color;
    if(req.body.kite_shape) toUpdate.kite_shape = req.body.kite_shape;
    if(req.body.kite_cost) toUpdate.kite_cost = req.body.kite_cost;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
    // Handle a show one view with id specified by query
    exports.kite_view_one_Page = async function(req, res) {
        console.log("single view for id " + req.query.id)
        try{
        result = await kite.findById( req.query.id)
        res.render('kitedetail',
        { title: 'kite Detail', toShow: result });
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
        };
    // Handle building the view for creating a costume.
    // No body, no in path parameter, no query.
    // Does not need to be async
    exports.kite_create_Page = function(req, res) {
        console.log("create view")
        try{
        res.render('kitecreate', { title: 'kite Create'});
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
        };
    // Handle building the view for updating a costume.
    // query provides the id
    exports.kite_update_Page = async function(req, res) {
        console.log("update view for item "+req.query.id)
        try{
        let result = await kite.findById(req.query.id)
        res.render('kiteupdate', { title: 'kite Update', toShow: result });
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
        };
    // Handle a delete one view with id from query
    exports.kite_delete_Page = async function(req, res) {
        console.log("Delete view for id " + req.query.id)
        try{
        result = await kite.findById(req.query.id)
        res.render('kitedelete', { title: 'kite Delete', toShow:
        result });
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
        };

        // Handle Costume delete on DELETE.
exports.kite_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await kite.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};