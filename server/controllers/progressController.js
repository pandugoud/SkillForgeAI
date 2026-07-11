const Progress =
require("../models/Progress");



exports.createProgress = async(req,res)=>{


try{


const {
roadmapId,
totalPhases
}=req.body;



const progress =
await Progress.create({


user:req.user,


roadmapId,


totalPhases


});



res.json({

success:true,

data:progress

});


}

catch(error){


res.status(500).json({

message:error.message

});


}


};








exports.updateProgress = async(req,res)=>{


try{


const {
id
}=req.params;


const {
phase,
completed
}=req.body;



const progress =
await Progress.findById(id);




if(completed){


progress.completedPhases.push({

phase

});


}




progress.progress =
Math.round(
(progress.completedPhases.length /
progress.totalPhases)
*
100
);




await progress.save();



res.json({

success:true,

data:progress

});


}


catch(error){


res.status(500).json({

message:error.message

});


}


};








exports.getProgress = async(req,res)=>{


try{


const progress =
await Progress.find({

user:req.user

})
.populate("roadmapId");



res.json({

success:true,

data:progress

});


}


catch(error){


res.status(500).json({

message:error.message

});


}


};