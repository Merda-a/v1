

import { useDispatch } from 'react-redux'
import { getCadetsAPI } from '../API/CadetsAPI'
const DELETE_CADET = 'DELETE_CADET'
const SET_CADET = 'SET_CADET'
const SET_FILTERED_CADET_DATA = 'SET_FILTERED_CADET_DATA'
const UPDATE_CADET_DATA = 'UPDATE_CADET_DATA'

let initState =
{
    cadetsPage: {
        cadets: []
    }
}

export const CadetsReduser = (state = initState, action) => {
    let copyState = {
        ...state
    }
    switch (action.type) {
        case SET_CADET:
            debugger
            if (Array.isArray(action.data)) {
                copyState.cadetsPage.cadets = action.data;
            }
            else {
                copyState.cadetsPage.cadets = [...action.data];
            }
            return copyState;
        case SET_FILTERED_CADET_DATA:
            copyState.cadetsPage.cadets.length = 0;
            copyState.cadetsPage.cadets = [...action.users];
            return copyState;
        case DELETE_CADET:
            debugger
            copyState.cadetsPage.cadets = [...state.cadetsPage.cadets]
            for (let i = 0; i < copyState.usersPage.users.length; i++) {
                if (copyState.cadetsPage.cadets[i].id === action.id) {
                    copyState.cadetsPage.cadets.splice(i, 1);
                }
            }
            return copyState;
        case UPDATE_CADET_DATA:

        default:
            return state;
    }
}
const setCadetsAC = (data) => {
    console.log('setCadetsAC');
    console.log(data);
    let action = { type: SET_CADET, data }
    return action;
}
export const getCadetsThunkCreator = () => {
    return (dispatch) => {
        getCadetsAPI().then(data => {
            console.log("getUsersThunkCreator");
            console.log(data);
            if (data) {
                dispatch(setCadetsAC(data));
            }
        });
    }
}

const deleteCadetsAC = (id) => {
    console.log('deleteCadetsAC ' + id);
    let action = { type: DELETE_CADET, id }
    return action;
}

const setFilteredDataCadetsAC = (users) => {
    console.log('setFilteredDataCadetsAC');
    console.log(users);
    let action = { type: SET_FILTERED_CADET_DATA, users }
    return action;
}