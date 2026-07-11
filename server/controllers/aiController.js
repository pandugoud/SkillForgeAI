const Groq = require("groq-sdk");

const Chat = require("../models/Chat");


const client = new Groq({

apiKey:process.env.GROQ_API_KEY

});



exports.askAI = async(req,res)=>{


try{


const {
message
}=req.body;



if(!message){

return res.status(400).json({

message:"Message required"

});

}



const completion =
await client.chat.completions.create({

model:"llama-3.1-8b-instant",


messages:[

{
role:"system",

content:
`
You are SkillForge AI.
You are a senior software engineer.
Help users with:
- coding
- debugging
- React
- Node.js
- MongoDB
- career guidance
`
},


{
role:"user",
content:message
}

],


temperature:0.7

});



const answer =
completion
.choices[0]
.message
.content;



await Chat.create({

user:req.user,

message,

response:answer

});



res.json({

success:true,

answer

});


}

catch(error){


console.log(error);


res.status(500).json({

success:false,

message:"AI service failed"

});


}


};