import { getListbyIdAPI } from "../API/api";

const SET_LIST = 'SET_USER_DATA_LIST'

let initState =
{
   ListPage: {}
}

export const ListReduser = (state = initState, action) => {
   let copyState = {
      ...state
   }
   switch (action.type) {
      case SET_LIST:
         copyState.ListPage = {};
         copyState.ListPage = { ...action.list };
         return copyState;
      default:
         return state;
   }
}

export const getUserbyIdThunkCreator = (id) => {
   debugger
   return (dispatch) => {
      getListbyIdAPI(id).then(data => {
         console.log("getUserbyIdThunkCreator");
         console.log(data); debugger
         dispatch(setListAC(data));
      });
   }
}

export const setListAC = (List) => {
   let action = { type: SET_LIST, List }
   return action;
}