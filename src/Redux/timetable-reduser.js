import { getTimetableAPI } from "../API/TimetibleAPI";

const GET_TIMETABLE = 'GET_TIMETABLE'

let initialState = {
   timetablePage: {
      timetable: []
   }
}

export const timetableReduser = (state = initialState, action) => {
   let copyState = {
      ...state
   }
   switch (action.type) {

      case GET_TIMETABLE:
         console.log('timetableReduser GET TIMETABLE');
         copyState.timetablePage.timetable = [...action.data];
         console.log(...action.data);

         return copyState;
      default:
         return state;
   }
}

export const getTimetableThunkCreator = (group, dateTime) => {

   return (dispatch) => {
      getTimetableAPI(group, dateTime).then(data => {
         dispatch(setDataAC(data));
      });
   }
}
export const setDataAC = (data) => {
   return {
      type: GET_TIMETABLE,
      data
   }
}
export const setGroupAC = (data) => {
   return {
      type: GET_TIMETABLE,
      data
   }
}
