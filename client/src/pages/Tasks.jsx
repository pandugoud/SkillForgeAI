import {useEffect,useState} from "react";

import taskService from "../services/taskService";



export default function Tasks(){


const [tasks,setTasks]=useState([]);


const [form,setForm]=useState({

title:"",
description:"",
project:""

});



const loadTasks=async()=>{

const data =
await taskService.getTasks();

setTasks(data);

};



useEffect(()=>{

loadTasks();

},[]);





const submit=async(e)=>{

e.preventDefault();


await taskService.createTask(form);


setForm({

title:"",
description:"",
project:""

});


loadTasks();


};




return (

<div>


<h1 className="
text-3xl
font-bold
mb-8
">

Task Management

</h1>




<form
onSubmit={submit}
className="space-y-4 mb-10"
>


<input

className="border p-3 w-full"

placeholder="Task title"

value={form.title}

onChange={
e=>setForm({
...form,
title:e.target.value
})
}

/>



<textarea

className="border p-3 w-full"

placeholder="Description"

value={form.description}

onChange={
e=>setForm({
...form,
description:e.target.value
})
}

/>



<input

className="border p-3 w-full"

placeholder="Project ID"

value={form.project}

onChange={
e=>setForm({
...form,
project:e.target.value
})
}

/>



<button

className="
bg-blue-600
text-white
px-5
py-3
rounded
"

>

Create Task

</button>


</form>




<div className="
grid
md:grid-cols-3
gap-5
">


{
tasks.map(task=>(

<div

key={task._id}

className="
bg-white
shadow
rounded-xl
p-5
"


>


<h2 className="
font-bold
text-xl
">

{task.title}

</h2>


<p>

{task.status}

</p>


</div>

))
}



</div>


</div>

)

}