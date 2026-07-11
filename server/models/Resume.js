const mongoose = require("mongoose");


const resumeSchema = new mongoose.Schema({

user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User",
required:true
},


fileName:{
type:String
},


analysis:{
type:String
},


score:{
type:Number
}


},
{
timestamps:true
});


module.exports =
mongoose.model(
"Resume",
resumeSchema
);