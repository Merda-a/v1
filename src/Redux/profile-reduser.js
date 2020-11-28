import { getUserbyIdAPI } from "../API/api";

const SET_PROFILE = 'SET_USER_DATA_PROFILE'

let initState =
{
   ProfilePage: {}
}

export const ProfileReduser = (state = initState, action) => {
   let copyState = {
      ...state
   }
   switch (action.type) {
      case SET_PROFILE:
         copyState.ProfilePage = {};
         copyState.ProfilePage = { ...action.profile };
         return copyState;
      //return { ...state, users: [...state.users, action.users] }
      default:
         return state;
   }
}

export const getUserbyIdThunkCreator = (id) => {
   debugger
   return (dispatch) => {
      getUserbyIdAPI(id).then(data => {
         console.log("getUserbyIdThunkCreator");
         console.log(data); debugger
         dispatch(setProfileAC(data));
      });
   }
}

export const setProfileAC = (profile) => {
   let action = { type: SET_PROFILE, profile }
   return action;
}