const mongoose = require("mongoose")
const kiteSchema = mongoose.Schema({
    kite_colour: String,
    kite_shape: String,
    kite_cost: Number
})
module.exports = mongoose.model("kite", 
kiteSchema)
// Handle kite create on POST.
exports.kite_create_post = async function(req, res) {
    console.log(req.body)
    let document = new kite();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"kite_type":"goat", "cost":12, "size":"large"}
    // document.kite_type = req.body.kite_type;
    // document.cost = req.body.cost;
    // document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    