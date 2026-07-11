const Groq = require("groq-sdk");

const Roadmap = require("../models/Roadmap");



const client = new Groq({

    apiKey: process.env.GROQ_API_KEY

});





exports.generateRoadmap = async (req, res) => {


    try {


        const {
            skills,
            goal
        } = req.body;




        if (!skills) {


            return res.status(400).json({

                success:false,

                message:"Skills are required"

            });


        }






        const completion =
        await client.chat.completions.create({


            model:"llama-3.1-8b-instant",



            response_format:{

                type:"json_object"

            },



            temperature:0.2,



            messages:[



                {

                    role:"system",


                    content:
`
You are an expert AI career mentor.

Create a personalized learning roadmap.

Return ONLY valid JSON.

No markdown.
No explanation.
No comments.

Use this exact JSON structure:

{
 "level":"Beginner or Intermediate or Advanced",
 "duration":"string",
 "phases":[
    {
      "title":"string",
      "skills":[
        "skill1",
        "skill2"
      ],
      "projects":[
        "project1",
        "project2"
      ]
    }
 ],
 "weeklyPlan":[
    "week plan item"
 ]
}

All values must be strings or arrays.
JSON must be valid.
`

                },



                {


                    role:"user",


                    content:
`
User Skills:

${skills}


Career Goal:

${goal || "Full Stack Developer"}

Generate roadmap.
`

                }



            ]



        });







        let aiResponse =
        completion
        .choices[0]
        .message
        .content;




        console.log(
            "RAW ROADMAP AI RESPONSE:"
        );


        console.log(aiResponse);







        // Remove markdown if any

        let cleanJSON =
        aiResponse

        .replace(/```json/g,"")

        .replace(/```/g,"")

        .trim();







        // Extract JSON object only

        const start =
        cleanJSON.indexOf("{");


        const end =
        cleanJSON.lastIndexOf("}") + 1;





        if(start !== -1 && end !== -1){


            cleanJSON =
            cleanJSON.substring(
                start,
                end
            );


        }






        let roadmap;




        try{


            roadmap =
            JSON.parse(cleanJSON);


        }

        catch(error){



            console.log(
                "JSON PARSE ERROR:"
            );


            console.log(
                cleanJSON
            );



            return res.status(500).json({

                success:false,

                message:
                "AI generated invalid JSON"

            });


        }








        const savedRoadmap =

        await Roadmap.create({



            user:req.user,



            skills:
            skills
            .split(",")
            .map(skill=>skill.trim()),



            level:
            roadmap.level,



            roadmap:roadmap



        });








        res.status(200).json({



            success:true,



            message:
            "Roadmap generated successfully",



            data:savedRoadmap



        });






    }

    catch(error){



        console.log(
            "ROADMAP ERROR:"
        );


        console.log(error);




        res.status(500).json({

            success:false,

            message:error.message

        });



    }



};