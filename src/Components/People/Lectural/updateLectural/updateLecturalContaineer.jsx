
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserbyIdThunkCreator } from './../../../../Redux/profile-reduser.js';
import { updateUserThunkCreator } from "./../../../../Redux/users-reduser";
import { UpdateUsers } from './UpdateLectural.jsx';

let maptoStateToProps = (state) => {   
   
    return {        
        position: state.newUserReduser.newUserPage.position,
        militaryRank: state.newUserReduser.newUserPage.militaryRank,
        academicTitle: state.newUserReduser.newUserPage.academicTitle,
        academicDegree: state.newUserReduser.newUserPage.academicDegree,
        isAuth: state.LoginReduser.loginPage.isLoadingUser
    }
}
let mapDispatchToProps = (dispatch) => {
    return {  
        updateUser:(data)=>{            
            dispatch(updateUserThunkCreator(data));
        },
        getUserbyId: (id) =>{            
            dispatch(getUserbyIdThunkCreator(id));
        }
    }
}
let WithURL = withRouter(UpdateUsers);


const UpdateUserContainer = connect(maptoStateToProps, mapDispatchToProps)(WithURL);

export default UpdateUserContainer;