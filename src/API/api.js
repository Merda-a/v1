import * as axios from "axios"
import { GetUser, GetTokens } from "./authAPI";


const instance = axios.create(
   {
      //withCredentials :true,
      headers: {
         'Content-Type': 'application/json'
      },
      baseURL: "https://localhost:44351/api/"
   }
);
const instance2 = axios.create(
   {
      //withCredentials :true,
      headers: {
         'Content-Type': 'application/json'
      },
      baseURL: " http://k41.kafedra41.local/WB/api"
   }
);
export const getUsersAPI = () => {
   return GetTokens().then(
      (user) => {
         if (user) {
            console.log(user)
            var config = {
               method: 'get',
               url: 'https://localhost:44351/api/Lecturals/Min',
               headers:
               {
                  Authorization: 'Bearer ' + user.access_token,
                  Profile:
                     [
                        user.profile.name,
                        user.profile.email,
                     ]
               },
            };

            return axios(config)
               .then(responce => {
                  return responce.data
               }).catch((error) => {
                  console.log("Api call error");
                  alert(error.message);
               });
         }
      })
}

export const getUserbyIdAPI = (id) => {
   let path = "Lecturals/" + id;
   debugger
   return instance.get(path).then(responce => {
      debugger
      return responce.data
   }).catch((error) => {
      console.log("Api call error");
      alert(error.message);
   });;
}

export const getDisciplinesAPI = () => {
   let path = "/DisciplineDBs";
   debugger
   return instance.get(path).then(responce => {
      debugger
      return responce.data
   }).catch((error) => {
      console.log("Api call error");
      alert(error.message);
   });;
}



export const getListbyIdAPI = (id) => {
   let path = "ListOfDisciplines/" + id;
   debugger
   return instance.get(path).then(responce => {
      debugger
      return responce.data
   }).catch((error) => {
      console.log("Api call error");
      alert(error.message);
   });;
}

export const updateUserAPI = (data) => {

}
export const createUserAPI = (newUser) => {
   debugger;
   return instance.post("Lecturals/?", JSON.stringify(newUser)).then(responce => {
      if (responce.data != null)
         window.location = "/Users"
   }).catch((error) => {
      console.log("Api call error");
      alert(error.message);
   });;
}
export const getAcademicDegreesAPI = () => {
   return instance.get("AcademicDegrees/").then(responce => {
      return responce.data
   }).catch((error) => {
      console.log("Api call error");
      alert(error.message);
   });;
}
export const getAcademicTitlesAPI = () => {
   return instance.get("AcademicTitles/").then(responce => {
      return responce.data
   }).catch((error) => {
      console.log("Api call error");
      alert(error.message);
   });;
}
export const getPositionAPI = () => {
   return instance.get("Positions/").then(responce => {
      return responce.data
   });
}
export const getMilitaryRanksAPI = () => {
   return instance.get("MilitaryRanks/").then(responce => {
      return responce.data
   }).catch((error) => {
      console.log("Api call error");
      alert(error.message);
   });;
}
export const getUserDataByFilter = (filters) => {
   debugger;
   var path = "/Lecturals/filtered?firstName=" + filters.firstName + "&middleName=" + filters.middleName +
      "&lastName=" + filters.lastName + "&militaryRank=" + filters.militaryRank + "&position=" + filters.position
      + "&academicTitle=" + filters.academicTitle + "&academicDegree=" + filters.academicDegree + "&formSec=" + filters.formSec;
   return instance.get(path).then(responce => {
      return responce.data
   }).catch((error) => {
      console.log("Api call error");
      alert(error.message);
   });;
}
export const deleteUserAPI = (id) => {

   var path = "Lecturals/" + id;
   return instance.delete(path).then(responce => {

      return responce.data
   }).catch((error) => {
      console.log("Api call error");
      alert(error.message);
   });;
}