const User = require("../models/User");

const Resume = require("../models/Resume");

const Roadmap = require("../models/Roadmap");

const Progress = require("../models/Progress");





exports.dashboard = async(req,res)=>{


try{


const users =
await User.countDocuments();



const resumes =
await Resume.countDocuments();



const roadmaps =
await Roadmap.countDocuments();



const progress =
await Progress.countDocuments();





const recentUsers =
await User.find()
.sort({
createdAt:-1
})
.limit(5)
.select("-password");




res.json({

success:true,

data:{


users,

resumes,

roadmaps,

progress,

recentUsers


}


});



}

catch(error){


res.status(500).json({

message:error.message

});


}



};