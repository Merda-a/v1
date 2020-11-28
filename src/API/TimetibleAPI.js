import * as axios from "axios"


const instance = axios.create(
    {
        //withCredentials :true,
        baseURL: "https://localhost:44351/api/TimetableDBs"
    }
);
export const getTimetableAPI = (group, dateTime) =>{
   
var path = "/forGroup?groupDTO=" + group + "&dateTime=" + dateTime;
    return instance.get(path).then(responce =>{
         return responce.data
    });
}
