import {Draggable} from "@hello-pangea/dnd";


export default function TaskCard({
task,
index
}){


return (

<Draggable
draggableId={task._id}
index={index}
>

{
(provided)=>(

<div

ref={provided.innerRef}

{...provided.draggableProps}

{...provided.dragHandleProps}

className="
bg-white
rounded-xl
shadow
p-4
mb-4
cursor-pointer
"


>


<h3 className="
font-bold
text-lg
">

{task.title}

</h3>


<p className="
text-gray-600
text-sm
mt-2
">

{task.description}

</p>


<div className="
mt-3
text-sm
text-blue-600
">

{task.priority}

</div>


</div>

)

}


</Draggable>

)

}