import api from "./api";



const getProgress = async()=>{


const res =
await api.get(
"/progress"
);


return res.data;


};




const createProgress = async(data)=>{


const res =
await api.post(

"/progress/create",

data

);


return res.data;


};




const updateProgress =
async(id,data)=>{


const res =
await api.put(

`/progress/update/${id}`,

data

);


return res.data;


};



export default {

getProgress,

createProgress,

updateProgress

};