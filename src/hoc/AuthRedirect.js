import { Redirect } from "react-router-dom"
import React, { Component } from 'react';
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.LoginReduser.loginPage.isLoadingUser,
    role: state.LoginReduser.loginPage.user.role
})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            var isInRole = false
            for (var i = 0; i < this.props.role.lenght; i++) {
                if (this.props.role[i] == 'admin')
                    isInRole = true;
            }
            if (!this.props.isAuth) return <Redirect to='/Login' />

            if (isInRole) return <Redirect to='/AccessDenided' />
            return <Component {...this.props} />
        }
    }

    let connRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return connRedirectComponent;
}
