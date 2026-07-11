import FeatureCard from "../components/FeatureCard";


export default function Home(){


return (

<div>


<section className="
bg-gradient-to-r
from-blue-600
to-purple-600
text-white
py-24
px-8
text-center
">


<h1 className="
text-5xl
font-bold
mb-6
">

Build Your Developer Career With AI

</h1>


<p className="
text-xl
max-w-3xl
mx-auto
mb-8
">

SkillForge AI helps developers learn,
build projects, track progress and
improve their career using AI.

</p>


<button className="
bg-white
text-blue-600
px-8
py-3
rounded-xl
font-semibold
">

Start Building

</button>


</section>




<section className="
py-20
px-8
bg-gray-100
">


<h2 className="
text-3xl
font-bold
text-center
mb-12
">

Powerful Features

</h2>


<div className="
grid
md:grid-cols-3
gap-8
">


<FeatureCard

title="AI Developer Assistant"

description="Generate code, solve errors and learn faster."

/>


<FeatureCard

title="Project Management"

description="Manage tasks and track development progress."

/>


<FeatureCard

title="Career Analytics"

description="Improve skills with detailed insights."

/>


</div>


</section>





<section className="
py-20
text-center
">


<h2 className="
text-4xl
font-bold
mb-5
">

Ready to become a better developer?

</h2>


<p className="
text-gray-600
mb-8
">

Create projects. Learn skills. Build your future.

</p>


<button className="
bg-blue-600
text-white
px-8
py-3
rounded-lg
">

Join SkillForge AI

</button>


</section>


</div>

)

}