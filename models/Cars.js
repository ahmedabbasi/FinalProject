const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema= new Schema({
  name : {type:String, required:true},
  type : {type: String}

});

 const Cars = mongoose.model("Cars", carSchema)

 module.exports = Cars;
