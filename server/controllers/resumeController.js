// server/controllers/resumeController.js


const fs = require("fs");

const pdf = require("pdf-parse");

const Groq = require("groq-sdk");

const Resume = require("../models/Resume");



const client = new Groq({

    apiKey: process.env.GROQ_API_KEY

});





exports.analyzeResume = async (req, res) => {


    try {


        if (!req.file) {

            return res.status(400).json({

                success:false,

                message:"Resume PDF required"

            });

        }



        console.log("Uploaded File:", req.file.filename);



        // Read PDF

        const dataBuffer = fs.readFileSync(
            req.file.path
        );



        const pdfData = await pdf(dataBuffer);



        const resumeText = pdfData.text;



        console.log(
            "Extracted Text:",
            resumeText.substring(0,200)
        );



        if(!resumeText){

            return res.status(400).json({

                success:false,

                message:"Could not extract text from PDF"

            });

        }




        // AI Analysis

        const completion =
        await client.chat.completions.create({


            model:"llama-3.1-8b-instant",


            messages:[


                {

                    role:"system",

                    content:
`
You are an expert technical recruiter.

Analyze the resume.

Return ONLY valid JSON.

Do not use markdown.
Do not add explanations.

JSON format:

{
 "score": number,
 "skills": [],
 "missingSkills": [],
 "strengths": [],
 "improvements": [],
 "roadmap": []
}

Score should be between 0 and 100.
`

                },


                {

                    role:"user",

                    content:resumeText

                }


            ],


            temperature:0.3


        });





        let analysisText =
        completion
        .choices[0]
        .message
        .content;




        console.log(
            "AI Response:",
            analysisText
        );





        // Remove markdown if AI sends ```json

        const cleanJSON =
        analysisText
        .replace(/```json/g,"")
        .replace(/```/g,"")
        .trim();





        let analysis;



        try {


            analysis =
            JSON.parse(cleanJSON);


        }

        catch(error){


            console.log(
                "JSON Parse Failed:"
            );


            console.log(
                cleanJSON
            );


            return res.status(500).json({

                success:false,

                message:"AI returned invalid JSON"

            });


        }





        // Save Database


        const resume =
        await Resume.create({


            user:req.user,


            fileName:req.file.filename,


            score:analysis.score,


            analysis:analysis


        });







        res.json({


            success:true,


            data:{


                score:analysis.score,


                analysis:analysis


            },


            resumeId:resume._id


        });





    }

    catch(error){


        console.error(
            "Resume Analyzer Error:"
        );


        console.error(error);



        res.status(500).json({


            success:false,


            message:error.message


        });


    }


};