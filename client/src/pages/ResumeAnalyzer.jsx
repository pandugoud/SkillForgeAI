import { useState } from "react";
import resumeService from "../services/resumeService";


export default function ResumeAnalyzer() {


    const [file, setFile] = useState(null);

    const [result, setResult] = useState(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");



    const upload = async () => {


        if (!file) {

            setError("Please upload a PDF resume");

            return;

        }


        try {


            setLoading(true);

            setError("");



            const response =
                await resumeService.analyzeResume(file);



            console.log(
                "Resume Response:",
                response
            );



            if (response.success) {


                setResult(
                    response.data
                );


            }
            else {


                setError(
                    response.message ||
                    "Analysis failed"
                );


            }



        }

        catch (err) {


            console.log(err);


            setError(
                err.response?.data?.message ||
                "Something went wrong"
            );


        }

        finally {


            setLoading(false);


        }


    };





    return (

        <div className="p-8">


            <h1 className="text-4xl font-bold mb-8">
                AI Resume Analyzer
            </h1>



            <div className="
            bg-white
            shadow
            rounded-xl
            p-6
            ">


                <input

                    type="file"

                    accept=".pdf"

                    onChange={
                        (e)=>
                        setFile(
                            e.target.files[0]
                        )
                    }

                />



                <button

                    onClick={upload}

                    disabled={loading}

                    className="
                    bg-blue-600
                    text-white
                    px-6
                    py-3
                    rounded
                    mt-5
                    "

                >

                    {
                        loading
                        ?
                        "Analyzing..."
                        :
                        "Analyze Resume"
                    }


                </button>



            </div>





            {
                error &&

                <div className="
                bg-red-100
                text-red-700
                p-4
                rounded
                mt-5
                ">

                    {error}

                </div>

            }







            {
                result &&

                <div className="
                mt-8
                space-y-6
                ">




                    <div className="
                    bg-blue-100
                    rounded-xl
                    p-6
                    ">


                        <h2 className="
                        text-xl
                        font-bold
                        ">

                            Resume Score

                        </h2>



                        <p

                            className={`
                            text-5xl
                            font-bold
                            mt-3

                            ${
                                result.score >= 80
                                ?
                                "text-green-600"
                                :
                                result.score >=60
                                ?
                                "text-yellow-600"
                                :
                                "text-red-600"
                            }

                            `}

                        >

                            {result.score}/100

                        </p>



                    </div>









                    <div className="
                    bg-white
                    shadow
                    rounded-xl
                    p-6
                    ">


                        <h2 className="
                        text-2xl
                        font-bold
                        mb-4
                        ">

                            Technical Skills

                        </h2>



                        <ul>


                            {
                                (
                                    result.analysis?.skills 
                                    ||
                                    []
                                )
                                .map(
                                    (skill,index)=>(

                                    <li key={index}>

                                        ✅ {skill}

                                    </li>

                                    )

                                )
                            }


                        </ul>



                    </div>










                    <div className="
                    bg-white
                    shadow
                    rounded-xl
                    p-6
                    ">


                        <h2 className="
                        text-2xl
                        font-bold
                        mb-4
                        ">

                            Missing Skills

                        </h2>



                        <ul>


                            {
                                (
                                    result.analysis?.missingSkills
                                    ||
                                    []
                                )
                                .map(
                                    (skill,index)=>(

                                    <li key={index}>

                                        ⚠️ {skill}

                                    </li>

                                    )

                                )
                            }


                        </ul>


                    </div>









                    <div className="
                    bg-white
                    shadow
                    rounded-xl
                    p-6
                    ">


                        <h2 className="
                        text-2xl
                        font-bold
                        mb-4
                        ">

                            Strengths

                        </h2>



                        {
                            (
                                result.analysis?.strengths
                                ||
                                []
                            )
                            .map(
                                (item,index)=>(

                                <p key={index}>

                                    ⭐ {item}

                                </p>

                                )

                            )
                        }


                    </div>









                    <div className="
                    bg-white
                    shadow
                    rounded-xl
                    p-6
                    ">


                        <h2 className="
                        text-2xl
                        font-bold
                        mb-4
                        ">

                            Career Roadmap

                        </h2>



                        {
                            (
                                result.analysis?.roadmap
                                ||
                                []
                            )
                            .map(
                                (item,index)=>(

                                <p key={index}>

                                    {index+1}. {item}

                                </p>

                                )

                            )
                        }



                    </div>






                </div>

            }




        </div>

    );

}