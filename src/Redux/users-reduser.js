
import { getUserDataByFilter, getUsersAPI, deleteUserAPI, updateUserAPI } from './../API/api.js'
import { useDispatch } from 'react-redux'
const DELETE_USER = 'DELETE_USER'
const SET_USER = 'SET_USER'
const SET_FILTERED_USER_DATA = 'SET_FILTERED_USER_DATA'
const UPDATE_USER_DATA = 'UPDATE_USER_DATA'

let initState =
{
    usersPage: {
        users: []
    }
}

export const UserReduser = (state = initState, action) => {
    let copyState = {
        ...state
    }
    switch (action.type) {
        case SET_USER:
            copyState.usersPage.users = [...action.users];
            return copyState;
        case SET_FILTERED_USER_DATA:
            copyState.usersPage.users.length = 0;
            copyState.usersPage.users = [...action.users];
            return copyState;
        case DELETE_USER:
            debugger
            copyState.usersPage.users = [...state.usersPage.users]
            for (let i = 0; i < copyState.usersPage.users.length; i++) {
                if (copyState.usersPage.users[i].id === action.id) {
                    copyState.usersPage.users.splice(i, 1);
                }
            }
            return copyState;
        case UPDATE_USER_DATA:
            
        default:
            return state;
    }
}

export const getUsersThunkCreator = () => {
    return (dispatch) => {
        getUsersAPI().then(data => {
            console.log("getUsersThunkCreator");
            console.log(data);
            if (data) {
                dispatch(setUsersAC(data));
            }
        });
    }
}

export const  updateUserThunkCreator = (data) => {
    return (dispatch) => {
        updateUserAPI(data).then(data => {
            console.log("updateUserThunkCreator");
            console.log(data);
            if (data) {
                dispatch(updateDataAC(data));
            }
        });
    }
}

export const getFilteredUsersThunkCreator = (filter) => {
    return (dispatch) => {
        getUserDataByFilter(filter).then(data => {
            console.log("getFilteredUsersThunkCreator");
            console.log(data);
            if (data) {
                dispatch(setFilteredDataUsersAC(data));
            }
        });
    }
}
export const deleteUserThunkCreator = (id) => {
    return (dispatch) => {        
        deleteUserAPI(id).then(data => {            
            if (data === id)
                dispatch(deleteUserAC(data));
        })
    }

}

const deleteUserAC = (id) => {
    console.log('deleteUserAC ' + id);
    let action = { type: DELETE_USER, id }
    return action;
}
const setUsersAC = (users) => {
    console.log('setUsersAC');
    console.log(users);
    let action = { type: SET_USER, users }
    return action;
}
const setFilteredDataUsersAC = (users) => {
    console.log('setFilteredDataUsersAC');
    console.log(users);
    let action = { type: SET_FILTERED_USER_DATA, users }
    return action;
}
const updateDataAC = (data) => {
    console.log('updateDataAC');
    console.log(data);
    let action = { type: UPDATE_USER_DATA, data }
    return action;
}