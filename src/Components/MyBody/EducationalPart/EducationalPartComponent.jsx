
import { setDataAC, getTimetableThunkCreator } from '../../../Redux/timetable-reduser';
import { Timetable } from './TimetableClass';
import { connect } from 'react-redux';
import { getUserInfoThunkCreator } from '../../../Redux/login-reduser';


let maptoStateToProps = (state) => {

   return {
      timetable: state.timetableReduser.timetablePage.timetable,
      user: state.LoginReduser
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      setData: (data) => {
         dispatch(setDataAC(data));
      },
      getUser: () => {
         dispatch(getUserInfoThunkCreator());
      },
      getTimetable: (group, dateTime) => {
         dispatch(getTimetableThunkCreator(group, dateTime));
      }
   }
}
const TimetibleContainer = connect(maptoStateToProps, mapDispatchToProps)(Timetable);

export default TimetibleContainer;