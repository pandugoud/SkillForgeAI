import api from "./api";


const dashboard = async()=>{


const res =
await api.get(
"/admin/dashboard"
);


return res.data;


};


export default {

dashboard

};