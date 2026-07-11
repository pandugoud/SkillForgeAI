import Sidebar from "../components/Sidebar";


export default function DashboardLayout({
children
}){


return (

<div className="
flex
">


<Sidebar/>


<div className="
flex-1
bg-gray-100
p-8
">


{children}


</div>


</div>

)

}