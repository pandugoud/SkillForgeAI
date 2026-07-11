import api from "./api";


const generateRoadmap = async(data)=>{


const response =
await api.post(

"/roadmap/generate",

data

);


return response.data;


};



export default {

generateRoadmap

};