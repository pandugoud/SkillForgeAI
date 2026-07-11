import {Link} from "react-router-dom";

import {useSelector,useDispatch} from "react-redux";

import {logout} from "../redux/authSlice";



export default function Navbar(){


const {isAuthenticated}=useSelector(
state=>state.auth
);


const dispatch=useDispatch();



return (

<nav className="
bg-gray-900
text-white
px-8
py-5
flex
justify-between
">


<Link to="/" className="text-2xl font-bold">
SkillForge AI
</Link>


<div>


{
isAuthenticated ?

<button

onClick={()=>dispatch(logout())}

className="bg-red-500 px-4 py-2 rounded"

>

Logout

</button>

:

<>

<Link className="mr-5" to="/login">
Login
</Link>


<Link 
className="bg-blue-600 px-4 py-2 rounded"
to="/register">

Register

</Link>

</>

}


</div>


</nav>

);


}