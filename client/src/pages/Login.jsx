import {useState} from "react";

import authService from "../services/authService";

import {useDispatch} from "react-redux";

import {loginSuccess} from "../redux/authSlice";

import {useNavigate} from "react-router-dom";



export default function Login(){


const dispatch=useDispatch();

const navigate=useNavigate();



const [form,setForm]=useState({

email:"",
password:""

});



const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};



const submit=async(e)=>{

e.preventDefault();


try{


const data =
await authService.login(form);



dispatch(
loginSuccess(data)
);



navigate("/dashboard");



}

catch(error){

alert(
error.response?.data?.message ||
"Login failed"
);

}


};



return (

<div className="max-w-md mx-auto mt-20">


<h1 className="text-3xl font-bold mb-6">
Login
</h1>


<form
onSubmit={submit}
className="space-y-4"
>


<input

name="email"

placeholder="Email"

className="border p-3 w-full"

onChange={handleChange}

/>



<input

name="password"

type="password"

placeholder="Password"

className="border p-3 w-full"

onChange={handleChange}

/>


<button

className="
bg-blue-600
text-white
px-5
py-3
rounded
"

>

Login

</button>


</form>


</div>

);


}