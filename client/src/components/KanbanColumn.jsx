import {Droppable} from "@hello-pangea/dnd";

import TaskCard from "./TaskCard";


export default function KanbanColumn({
title,
tasks,
id
}){


return (

<div className="
bg-gray-100
rounded-xl
p-5
min-h-[500px]
">


<h2 className="
font-bold
text-xl
mb-5
">

{title}

</h2>



<Droppable droppableId={id}>

{
(provided)=>(

<div

ref={provided.innerRef}

{...provided.droppableProps}

>


{
tasks.map(
(task,index)=>(

<TaskCard

key={task._id}

task={task}

index={index}

/>

)

)
}


{provided.placeholder}


</div>

)

}


</Droppable>


</div>

)

}