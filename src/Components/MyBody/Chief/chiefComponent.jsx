import { connect } from 'react-redux'

import { Chief } from './chief';

let maptoStateToProps = (state) => {
   console.log(state);
   return {
      isAuth: state.LoginReduser.loginPage.isLoadingUser,
      role: state.LoginReduser.loginPage.user.role
   }
}



const ChiefComponent = connect(maptoStateToProps)(Chief);
export default ChiefComponent;


