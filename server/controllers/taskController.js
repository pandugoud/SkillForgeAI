const Task = require("../models/Task");



// Create Task

exports.createTask = async(req,res)=>{

try{


const task = await Task.create({

...req.body,

owner:req.user

});


res.status(201).json(task);


}
catch(error){

res.status(500).json({
message:error.message
});

}

};




// Get Tasks


exports.getTasks = async(req,res)=>{

try{


const tasks = await Task.find({

owner:req.user

})
.populate("project","title");


res.json(tasks);


}
catch(error){

res.status(500).json({
message:error.message
});

}

};





// Update Task Status


exports.updateTask = async(req,res)=>{

try{


const task = await Task.findOneAndUpdate(

{
_id:req.params.id,
owner:req.user
},

req.body,

{
new:true
}

);


res.json(task);


}
catch(error){

res.status(500).json({
message:error.message
});

}

};






// Delete Task


exports.deleteTask = async(req,res)=>{

try{


await Task.findOneAndDelete({

_id:req.params.id,

owner:req.user

});


res.json({

message:"Task deleted"

});


}
catch(error){

res.status(500).json({
message:error.message
});

}

};