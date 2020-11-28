import { createUserAPI, getAcademicDegreesAPI, getAcademicTitlesAPI, getMilitaryRanksAPI, getPositionAPI, getUserbyIdAPI, setDataforUserCreateAPI } from "../API/api";

const SET_MILITARY_RANK = 'SET_MILITARY_RANK'
const SET_ACAD_TITLE = 'SET_ACAD_TITLE'
const SET_ACAD_DEGREE = 'SET_ACAD_DEGREE'
const SET_POSITION = 'SET_POSITION'
const GET_USER_FOR_UPDATE = 'GET_USER_FOR_UPDATE'

let initState =
{
    newUserPage: {
        position: [],
        militaryRank: [],
        academicTitle: [],
        academicDegree: []
    }
}

export const newUserReduser = (state = initState, action) => {
    let copyState = {
        ...state
    }
    switch (action.type) {
        case SET_POSITION:
            copyState.newUserPage.position = [...action.data];
            return copyState;
        case SET_MILITARY_RANK:
            copyState.newUserPage.militaryRank = [...action.data];
            return copyState;
        case SET_ACAD_TITLE:
            copyState.newUserPage.academicTitle = [...action.data];
            return copyState;
        case SET_ACAD_DEGREE:
            copyState.newUserPage.academicDegree = [...action.data];
            return copyState;
        default:
            return state;
    }
}

export const createUserThunkCreator = (newUser) => {
    return (dispatch) => {
        createUserAPI(newUser).then(data => {
            debugger
            if (data.lastName === newUser.lastName)
                window.location = "/Users";
        });
    }
}
export const setPositionThunkCreator = () => {
    return (dispatch) => {
        getPositionAPI().then(data => {
            dispatch(setPositionAC(data));
        });
    }
}
export const setMilitaryRankThunkCreator = () => {
    return (dispatch) => {
        getMilitaryRanksAPI().then(data => {
            dispatch(setMilitaryRankAC(data));
        });
    }
}
export const setAcademicDegreeThunkCreator = () => {
    return (dispatch) => {
        getAcademicDegreesAPI().then(data => {
            dispatch(setAcadDegreeAC(data));
        });
    }
}
export const setAcademicTitleThunkCreator = () => {
    return (dispatch) => {
        getAcademicTitlesAPI().then(data => {
            dispatch(setAcadTitleAC(data));
        });
    }
}

const setPositionAC = (data) => {
    return {
        type: SET_POSITION,
        data
    }
}
const setMilitaryRankAC = (data) => {
    return {
        type: SET_MILITARY_RANK,
        data
    }
}
const setAcadDegreeAC = (data) => {
    return {
        type: SET_ACAD_DEGREE,
        data
    }
}
const setAcadTitleAC = (data) => {
    return {
        type: SET_ACAD_TITLE,
        data
    }
}
