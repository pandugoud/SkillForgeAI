import {Link} from "react-router-dom";


export default function Sidebar(){

return (

<aside className="
w-64
bg-gray-900
text-white
min-h-screen
p-6
">


<h2 className="
text-2xl
font-bold
mb-8
">

SkillForge AI

</h2>



<nav className="space-y-5">


<Link 
to="/dashboard"
className="block hover:text-blue-400"
>
Dashboard
</Link>


<Link 
to="/projects"
className="block hover:text-blue-400"
>
Projects
</Link>


<Link 
to="/tasks"
className="block hover:text-blue-400"
>
Tasks
</Link>



<Link 
to="/analytics"
className="block hover:text-blue-400"
>
Analytics
</Link>



<Link 
to="/profile"
className="block hover:text-blue-400"
>
Profile
</Link>

<Link
to="/resume"
className="block hover:text-blue-400"
>
Resume Analyzer
</Link>

</nav>


</aside>

)

}