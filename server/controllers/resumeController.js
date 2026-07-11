const fs = require("fs");

const pdf = require("pdf-parse");

const Groq = require("groq-sdk");

const Resume = require("../models/Resume");



const client = new Groq({

apiKey:
process.env.GROQ_API_KEY

});




exports.analyzeResume = async(req,res)=>{


try{


const dataBuffer =
fs.readFileSync(
req.file.path
);



const pdfData =
await pdf(dataBuffer);



const resumeText =
pdfData.text;



const completion =
await client.chat.completions.create({


model:
"llama-3.1-8b-instant",


messages:[


{
role:"system",

content:
`
You are an expert technical recruiter.
Analyze resumes and provide:
1. Resume score out of 100
2. Technical skills
3. Missing skills
4. Improvement suggestions
5. Career roadmap
`
},


{
role:"user",

content:resumeText

}


]


});



const analysis =
completion
.choices[0]
.message
.content;



const resume =
await Resume.create({

user:req.user,

fileName:req.file.filename,

analysis,

score:75

});



res.json({

success:true,

resume

});


}

catch(error){


console.log(error);


res.status(500).json({

message:"Resume analysis failed"

});


}


};