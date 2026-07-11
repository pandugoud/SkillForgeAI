import {useState} from "react";

import authService from "../services/authService";


export default function Register(){


const [form,setForm]=useState({

name:"",
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


await authService.register(form);


alert("Registration successful");


}

catch(error){

alert(
error.response?.data?.message ||
"Error"
);

}


};



return (

<div className="max-w-md mx-auto mt-20">


<h1 className="text-3xl font-bold mb-6">
Create Account
</h1>


<form 
onSubmit={submit}
className="space-y-4"
>


<input

name="name"

placeholder="Name"

className="border p-3 w-full rounded"

onChange={handleChange}

/>


<input

name="email"

placeholder="Email"

className="border p-3 w-full rounded"

onChange={handleChange}

/>



<input

name="password"

type="password"

placeholder="Password"

className="border p-3 w-full rounded"

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

Register

</button>


</form>


</div>

);

}