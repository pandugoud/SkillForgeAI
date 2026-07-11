export default function FeatureCard({
  title,
  description
}){

return (

<div className="
bg-white
shadow-lg
rounded-xl
p-6
hover:scale-105
transition
">

<h3 className="
text-xl
font-bold
mb-3
">

{title}

</h3>


<p className="text-gray-600">

{description}

</p>


</div>

)

}