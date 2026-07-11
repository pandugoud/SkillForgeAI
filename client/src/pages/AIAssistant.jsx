import {useState} from "react";

import aiService from "../services/aiService";


export default function AIAssistant(){


const [input,setInput]=useState("");

const [messages,setMessages]=useState([]);



const send=async()=>{


if(!input)return;



const question=input;


setMessages(prev=>[
...prev,
{
type:"user",
text:question
}
]);


setInput("");



const data =
await aiService.askAI(question);



setMessages(prev=>[
...prev,
{
type:"ai",
text:data.answer
}
]);


};




return (

<div>


<h1 className="
text-4xl
font-bold
mb-8
">

SkillForge AI Assistant

</h1>



<div className="
bg-white
rounded-xl
p-6
shadow
min-h-[400px]
">


{
messages.map(
(item,index)=>(

<div key={index}
className="mb-5">


<b>
{
item.type==="user"
?
"You"
:
"AI"
}
</b>


<p>
{item.text}
</p>


</div>

)
)
}


</div>



<div className="
flex
gap-3
mt-5
">


<input

className="
border
p-3
flex-1
rounded
"

value={input}

onChange={
e=>setInput(e.target.value)
}

placeholder="Ask coding question..."

/>



<button

onClick={send}

className="
bg-blue-600
text-white
px-6
rounded
"

>

Send

</button>


</div>



</div>

)

}