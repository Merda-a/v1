
import {  getUserbyIdAPI } from "../API/api";

const GET_USER_FOR_UPDATE = 'GET_USER_FOR_UPDATE'
let initState =
{
    updateUserPage: {
        lectural: {}
    }
}

export const updateUserReduser = (state = initState, action) => {
    let copyState = {
        ...state
    }
    switch (action.type) {
        case GET_USER_FOR_UPDATE:
            debugger
            copyState.updateUserPage.lectural = { ...action.data }
            return copyState;
        default:
            return state;
    }

}


export const getLecturalForUpdateThunkCreator = (id) => {
    return (dispatch) => {
        debugger
        getUserbyIdAPI(id).then(data => {  
            debugger
            dispatch(getUserForUpdate(data));
        }).catch((error)=>{
            console.log("Api call error");
            alert(error.message);
         });;
    }
}


const getUserForUpdate = (data) => {
    debugger
    return {
        type: GET_USER_FOR_UPDATE,
        data
    }
}