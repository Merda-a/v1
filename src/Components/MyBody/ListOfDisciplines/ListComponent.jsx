
import { setDataAC, getDisciplinesThunkCreator } from '../../../Redux/disciplines-redusers';
import { ListOfDisciplines } from './ListClass';
import { connect } from 'react-redux';
import { getUserInfoThunkCreator } from '../../../Redux/login-reduser';


let maptoStateToProps = (state) => {

   return {
      disciplines: state.disciplinesReduser.disciplinesPage.disciplines,
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
      getDisciplines: (group, dateTime) => {
         dispatch(getDisciplinesThunkCreator());
      }
   }
}
const ListComponent = connect(maptoStateToProps, mapDispatchToProps)(ListOfDisciplines);

export default ListComponent;