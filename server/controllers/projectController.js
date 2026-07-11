const Project = require("../models/Project");



// CREATE PROJECT

exports.createProject = async(req,res)=>{


try{


const project = await Project.create({

...req.body,

owner:req.user

});


res.status(201).json(project);



}
catch(error){


res.status(500).json({
message:error.message
});


}


};





// GET USER PROJECTS

exports.getProjects = async(req,res)=>{


try{


const projects =
await Project.find({
owner:req.user
});


res.json(projects);



}
catch(error){


res.status(500).json({
message:error.message
});


}


};





// DELETE PROJECT


exports.deleteProject = async(req,res)=>{


try{


await Project.findOneAndDelete({

_id:req.params.id,

owner:req.user

});


res.json({

message:"Project deleted"

});


}
catch(error){


res.status(500).json({
message:error.message
});


}


};