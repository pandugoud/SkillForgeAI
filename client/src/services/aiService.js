import api from "./api";


const askAI = async(message)=>{


const response =
await api.post(
"/ai/chat",
{
message
}
);


return response.data;


};


export default {
askAI
};