
import { setDataAC, getTimetableThunkCreator } from '../../../Redux/timetable-reduser';
import { Lesson } from './LessonClass';
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
const LessonContent = connect(maptoStateToProps, mapDispatchToProps)(Lesson);

export default LessonContent;