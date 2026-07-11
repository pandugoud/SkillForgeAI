import {useEffect,useState} from "react";

import adminService
from "../services/adminService";


import {

BarChart,

Bar,

XAxis,

YAxis,

Tooltip

}
from "recharts";



export default function AdminDashboard(){


const [stats,setStats]=useState(null);



useEffect(()=>{


load();


},[]);



const load=async()=>{


const res =
await adminService.dashboard();


setStats(
res.data
);


};




if(!stats){

return <h1 className="p-8">

Loading...

</h1>

}





const chart=[

{
name:"Users",
value:stats.users
},

{
name:"Resume",
value:stats.resumes
},

{
name:"Roadmap",
value:stats.roadmaps
},

{
name:"Progress",
value:stats.progress
}

];





return (

<div className="p-8">


<h1 className="
text-4xl
font-bold
mb-8
">

Admin Analytics Dashboard

</h1>




<div className="
grid
grid-cols-4
gap-5
">


<div className="
bg-blue-100
p-5
rounded-xl
">

Users

<h2 className="text-3xl font-bold">

{stats.users}

</h2>

</div>



<div className="
bg-green-100
p-5
rounded-xl
">

Resumes

<h2 className="text-3xl font-bold">

{stats.resumes}

</h2>

</div>



<div className="
bg-purple-100
p-5
rounded-xl
">

Roadmaps

<h2 className="text-3xl font-bold">

{stats.roadmaps}

</h2>

</div>


<div className="
bg-yellow-100
p-5
rounded-xl
">

Progress

<h2 className="text-3xl font-bold">

{stats.progress}

</h2>

</div>


</div>







<div className="mt-10">


<BarChart

width={600}

height={300}

data={chart}

>


<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Bar

dataKey="value"

fill="#2563eb"

/>


</BarChart>



</div>




</div>

)

}