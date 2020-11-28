import React from 'react'
import { connect } from 'react-redux'
import { withAuthRedirect } from './../../../hoc/AuthRedirect';
import { compose } from 'redux';import { getCadetsThunkCreator } from '../../../Redux/cadets-reduser';
import { CadetsClass } from './CadetsClass';

let maptoStateToProps = (state) => {
    return {
        position: state.newUserReduser.newUserPage.position,
        militaryRank: state.newUserReduser.newUserPage.militaryRank,
        cadets: state.CadetsReduser.cadetsPage.cadets,
        isAuth: state.LoginReduser.loginPage.isLoadingUser,
        role: state.LoginReduser.loginPage.user.role
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getCadets: () => {
            dispatch(getCadetsThunkCreator());
        }
    }
}

export default compose(
    connect(maptoStateToProps, mapDispatchToProps),
    //withAuthRedirect
)(CadetsClass);