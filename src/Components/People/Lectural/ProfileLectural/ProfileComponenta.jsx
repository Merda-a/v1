
import { connect } from 'react-redux'
import { setProfileAC, getUserbyIdThunkCreator } from '../../../../Redux/profile-reduser'
import { ProfileClass } from './ProfileClass'
import { withRouter } from 'react-router-dom';

let maptoStateToProps = (state) => {
    console.log(state);
    return {
        ProfilePage: state.ProfileReduser.ProfilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {        
        setProfile: (ProfilePage) => {
            dispatch(setProfileAC(ProfilePage));
        },
        getUserbyId: (id) =>{
            dispatch(getUserbyIdThunkCreator(id));
        }
    }
}

let WithURL = withRouter(ProfileClass);

export default connect(maptoStateToProps, mapDispatchToProps)(WithURL);