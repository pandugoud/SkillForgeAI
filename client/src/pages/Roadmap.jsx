import {useState} from "react";

import roadmapService from "../services/roadmapService";


export default function Roadmap(){


const [skills,setSkills]=useState("");

const [goal,setGoal]=useState("");

const [data,setData]=useState(null);

const [loading,setLoading]=useState(false);



const generate=async()=>{


try{


setLoading(true);


const response =
await roadmapService.generateRoadmap({

skills,

goal

});


setData(
response.data.roadmap
);


}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}


};





return (

<div className="p-8 max-w-5xl mx-auto">


<h1 className="
text-4xl
font-bold
mb-8
">

🚀 AI Career Roadmap

</h1>





<div className="
bg-white
shadow
rounded-xl
p-6
">


<input

className="
border
p-3
w-full
rounded
mb-4
"

placeholder="Skills (React, Node, MongoDB)"

value={skills}

onChange={
e=>setSkills(e.target.value)
}

/>





<input

className="
border
p-3
w-full
rounded
mb-4
"

placeholder="Career Goal"

value={goal}

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
rounded-lg
"

>

{
loading
?
"Generating..."
:
"Generate Roadmap"
}

</button>


</div>








{
data &&

<div className="mt-10">


<div className="
bg-gradient-to-r
from-blue-500
to-purple-600
text-white
p-6
rounded-xl
">


<h2 className="
text-2xl
font-bold
">

Level:
{data.level}

</h2>


<p className="mt-2">

Duration:
{data.duration}

</p>


</div>







<h2 className="
text-3xl
font-bold
mt-10
mb-5
">

Learning Phases

</h2>





{

data.phases.map(

(phase,index)=>(


<div

key={index}

className="
border-l-4
border-blue-600
bg-white
shadow
rounded-xl
p-6
mb-6
"


>


<h3 className="
text-xl
font-bold
">

Phase {index+1}: {phase.title}

</h3>





<h4 className="
font-bold
mt-4
">

Skills

</h4>


<div className="flex flex-wrap gap-2 mt-2">


{

phase.skills.map(

(skill,i)=>(

<span

key={i}

className="
bg-blue-100
text-blue-700
px-3
py-1
rounded-full
"

>

{skill}

</span>


)

)

}


</div>







<h4 className="
font-bold
mt-5
">

Projects

</h4>



<ul className="list-disc ml-5">


{

phase.projects.map(

(project,i)=>(

<li key={i}>

{project}

</li>

)

)

}


</ul>



</div>


)

)



}









<h2 className="
text-3xl
font-bold
mt-10
">

Weekly Learning Plan

</h2>



<div className="mt-5">


{

data.weeklyPlan.map(

(item,index)=>(


<div

key={index}

className="
bg-green-100
p-4
rounded-lg
mb-3
"

>

✅ {item}

</div>


)

)

}


</div>






</div>

}




</div>


)

}