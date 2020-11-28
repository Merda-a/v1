

import { connect } from 'react-redux';
import { createUserThunkCreator, setAcademicDegreeThunkCreator, setAcademicTitleThunkCreator,  setMilitaryRankThunkCreator, setPositionThunkCreator } from '../../../../Redux/newUser-reduser';
import { NewUsers } from './newLectural';

let maptoStateToProps = (state) => {   
   
    return {        
        position: state.newUserReduser.newUserPage.position,
        militaryRank: state.newUserReduser.newUserPage.militaryRank,
        academicTitle: state.newUserReduser.newUserPage.academicTitle,
        academicDegree: state.newUserReduser.newUserPage.academicDegree,
        user: state.LoginReduser.loginPage.user
    }
}
let mapDispatchToProps = (dispatch) => {
    return {                
        setPosition:()=>{
            dispatch(setPositionThunkCreator());
        },
        setMilitaryRank:()=>{
            dispatch(setMilitaryRankThunkCreator());
        },
        setAcademicDegree:()=>{
            dispatch(setAcademicDegreeThunkCreator());
        },
        setAcademicTittes:()=>{
            dispatch(setAcademicTitleThunkCreator());
        },
        createUser:(data)=>{
            debugger
            dispatch(createUserThunkCreator(data));
        }
    }
}
const NewUserContainer = connect(maptoStateToProps, mapDispatchToProps)(NewUsers);

export default NewUserContainer;