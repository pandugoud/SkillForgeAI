import {
useState
} from "react";


import roadmapService
from "../services/roadmapService";



export default function Roadmap(){


const [skills,setSkills]=useState("");

const [goal,setGoal]=useState("");

const [data,setData]=useState(null);



const generate=async()=>{


const res =
await roadmapService.generateRoadmap({

skills,

goal

});


setData(
res.data.roadmap
);


};




return (

<div className="p-8">


<h1 className="
text-4xl
font-bold
mb-8
">

AI Career Roadmap

</h1>



<input

className="
border
p-3
w-full
mb-4
"

placeholder="Your skills e.g React, Node"

onChange={
e=>setSkills(e.target.value)
}

/>



<input

className="
border
p-3
w-full
mb-4
"

placeholder="Career goal"

onChange={
e=>setGoal(e.target.value)
}

/>




<button

onClick={generate}

className="
bg-blue-600
text-white
px-6
py-3
rounded
"

>

Generate Roadmap

</button>





{
data &&

<div className="mt-8">


<h2 className="text-2xl font-bold">

Level:

{data.level}

</h2>




{
data.phases.map(
(phase,index)=>(


<div

key={index}

className="
bg-white
shadow
p-5
rounded-xl
mt-5
"


>


<h3 className="text-xl font-bold">

{phase.title}

</h3>


<p>

Skills:

{phase.skills.join(", ")}

</p>



<p>

Projects:

{phase.projects.join(", ")}

</p>



</div>


)

)

}



</div>

}



</div>

)


}