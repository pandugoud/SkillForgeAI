const mongoose = require("mongoose");


const progressSchema = new mongoose.Schema({

user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},


roadmapId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Roadmap"
},


completedPhases:[{

    phase:String,

    completedAt:{
        type:Date,
        default:Date.now
    }

}],


totalPhases:{
    type:Number,
    default:0
},


progress:{
    type:Number,
    default:0
},


streak:{
    type:Number,
    default:0
}


},
{
timestamps:true
});


module.exports =
mongoose.model(
"Progress",
progressSchema
);