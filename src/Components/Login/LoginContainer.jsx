import React from 'react'
import { connect } from 'react-redux';
import { LoginSuccess } from './Login';
import { getUserInfoThunkCreator } from '../../Redux/login-reduser';
import { redirectSuccess } from 'redux-oidc';
import { RedirectAuth } from '../../API/authAPI';


let maptoStateToProps = (state) => {
    
    return {        
        AuthClass: state.LoginReduser
    }
}

let mapDispatchToProps = (dispatch) => {
    return {        
        getUserInfo: () => {
           dispatch(getUserInfoThunkCreator());
        },
        redie: ()=>{
            dispatch(RedirectAuth)
        }
    }
}
const LoginSuccessContainer = connect(maptoStateToProps, mapDispatchToProps)(LoginSuccess);

export default LoginSuccessContainer;