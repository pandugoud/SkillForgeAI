import {useEffect,useState} from "react";

import progressService
from "../services/progressService";



export default function Progress(){


const [data,setData]=useState([]);




useEffect(()=>{


load();


},[]);





const load=async()=>{


const res =
await progressService.getProgress();


setData(
res.data
);


};





return (

<div className="p-8">


<h1 className="
text-4xl
font-bold
mb-8
">

Learning Progress

</h1>





{

data.map(

(item,index)=>(


<div

key={index}

className="
bg-white
shadow
rounded-xl
p-6
mb-5
"

>


<h2 className="
text-xl
font-bold
">

Progress

</h2>




<div className="
w-full
bg-gray-200
rounded-full
h-4
mt-4
">


<div

className="
bg-green-500
h-4
rounded-full
"

style={{

width:
`${item.progress}%`

}}

/>


</div>



<p className="mt-3">

{item.progress}% Completed

</p>




<p>

🔥 Streak:
{item.streak} days

</p>




</div>


)

)


}




</div>

)

}