import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";


export default function Dashboard(){


return (

<DashboardLayout>


<h1 className="
text-4xl
font-bold
mb-8
">

Developer Dashboard

</h1>



<div className="
grid
md:grid-cols-3
gap-6
">


<StatCard
title="Projects"
value="12"
/>


<StatCard
title="Completed Tasks"
value="45"
/>


<StatCard
title="Learning Progress"
value="78%"
/>


</div>





<div className="
mt-10
bg-white
rounded-xl
p-6
shadow
">


<h2 className="
text-2xl
font-bold
mb-4
">

Recent Projects

</h2>


<ul className="space-y-3">


<li>
AI Resume Analyzer
</li>


<li>
Developer Portfolio
</li>


<li>
Task Management App
</li>


</ul>


</div>



</DashboardLayout>

)

}