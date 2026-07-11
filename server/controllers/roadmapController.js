const Groq = require("groq-sdk");

const Roadmap = require("../models/Roadmap");


const client = new Groq({

apiKey:process.env.GROQ_API_KEY

});





exports.generateRoadmap = async(req,res)=>{


try{


const {
skills,
goal
}=req.body;



if(!skills){

return res.status(400).json({

message:"Skills required"

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
You are an expert career mentor.

Create a learning roadmap.

Return ONLY JSON.

Format:

{
"level":"",
"duration":"",
"phases":[
 {
 "title":"",
 "skills":[],
 "projects":[]
 }
],
"weeklyPlan":[]
}

`

},


{

role:"user",

content:
`
Skills:
${skills}

Career Goal:
${goal}

`

}

],


temperature:0.3


});





let text =
completion
.choices[0]
.message
.content;



text =
text
.replace(/```json/g,"")
.replace(/```/g,"")
.trim();



const roadmap =
JSON.parse(text);





const saved =
await Roadmap.create({


user:req.user,


skills:skills.split(","),


level:roadmap.level,


roadmap


});





res.json({

success:true,

data:saved


});



}

catch(error){


console.log(error);


res.status(500).json({

message:error.message

});


}


};