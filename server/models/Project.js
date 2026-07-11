const mongoose = require("mongoose");


const projectSchema = new mongoose.Schema({

title:{
    type:String,
    required:true
},


description:{
    type:String,
    required:true
},


status:{
    type:String,
    default:"Planning"
},


priority:{
    type:String,
    default:"Medium"
},


deadline:{
    type:Date
},


owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
}


},
{
timestamps:true
});


module.exports = mongoose.model(
"Project",
projectSchema
);