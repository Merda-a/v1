import react from 'react'
import { connect } from 'react-redux'
import { getUsersThunkCreator, getFilteredUsersThunkCreator, deleteUserThunkCreator } from './../../../Redux/users-reduser'
import { Users } from './UsersClass'
import { withAuthRedirect } from './../../../hoc/AuthRedirect';
import { compose } from 'redux';
import { setAcademicDegreeThunkCreator, setAcademicTitleThunkCreator, setMilitaryRankThunkCreator, setPositionThunkCreator } from "./../../../Redux/newUser-reduser";

let maptoStateToProps = (state) => {
    return {
        position: state.newUserReduser.newUserPage.position,
        militaryRank: state.newUserReduser.newUserPage.militaryRank,
        academicTitle: state.newUserReduser.newUserPage.academicTitle,
        academicDegree: state.newUserReduser.newUserPage.academicDegree,
        users: state.UserReduser.usersPage.users,
        isAuth: state.LoginReduser.loginPage.isLoadingUser,
        role: state.LoginReduser.loginPage.user.role
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setPosition: () => {
            dispatch(setPositionThunkCreator());
        },
        setMilitaryRank: () => {
            dispatch(setMilitaryRankThunkCreator());
        },
        setAcademicDegree: () => {
            dispatch(setAcademicDegreeThunkCreator());
        },
        setAcademicTittes: () => {
            dispatch(setAcademicTitleThunkCreator());
        },
        getUser: () => {
            dispatch(getUsersThunkCreator());
        },
        getFilteredUser: (filter) => {
            dispatch(getFilteredUsersThunkCreator(filter));
        },
        deleteUser:(id)=>{
            dispatch(deleteUserThunkCreator(id));
        }
    }
}

export default compose(
    connect(maptoStateToProps, mapDispatchToProps),
    //withAuthRedirect
)(Users);