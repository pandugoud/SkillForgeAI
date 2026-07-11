import {useEffect,useState} from "react";

import {
DragDropContext
} from "@hello-pangea/dnd";


import taskService from "../services/taskService";

import KanbanColumn from "../components/KanbanColumn";



export default function Tasks(){


const [tasks,setTasks]=useState([]);



const loadTasks=async()=>{

const data =
await taskService.getTasks();

setTasks(data);

};



useEffect(()=>{

loadTasks();

},[]);





const updateStatus=async(result)=>{


const {
destination,
source
}=result;



if(!destination)
return;



if(
destination.droppableId ===
source.droppableId
)
return;



const taskId =
result.draggableId;



await taskService.updateTask(

taskId,

{
status:
destination.droppableId
}

);



loadTasks();


};





const todo =
tasks.filter(
task=>task.status==="Todo"
);



const progress =
tasks.filter(
task=>task.status==="In Progress"
);



const completed =
tasks.filter(
task=>task.status==="Completed"
);





return (

<div>


<h1 className="
text-4xl
font-bold
mb-10
">

Task Board

</h1>



<DragDropContext
onDragEnd={updateStatus}
>


<div className="
grid
md:grid-cols-3
gap-8
">


<KanbanColumn

title="Todo"

id="Todo"

tasks={todo}

/>



<KanbanColumn

title="In Progress"

id="In Progress"

tasks={progress}

/>



<KanbanColumn

title="Completed"

id="Completed"

tasks={completed}

/>


</div>


</DragDropContext>



</div>

)

}