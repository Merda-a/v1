
import { connect } from 'react-redux';
import { setListAC, getUserbyIdThunkCreator } from '../../../Redux/list-reduser';
import { ListClass } from './ListClass';
import { withRouter } from 'react-router-dom';

let maptoStateToProps = (state) => {
   console.log(state);
   return {
      ListPage: state.ListReduser.ListPage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      setList: (ListPage) => {
         dispatch(setListAC(ListPage));
      },
      getUserbyId: (id) => {
         dispatch(getUserbyIdThunkCreator(id));
      }
   }
}

let WithURL = withRouter(ListClass);

export default connect(maptoStateToProps, mapDispatchToProps)(WithURL);