import { createStore, combineReducers, applyMiddleware } from "redux";
import { newsReduser } from "./news-reduser"
import { timetableReduser } from "./timetable-reduser"
import { UserReduser } from './users-reduser'
import { ProfileReduser } from './profile-reduser'
import thunkMiddleware from 'redux-thunk'
import { LoginReduser } from './login-reduser'
import { newUserReduser } from './newUser-reduser'
import { CadetsReduser } from './cadets-reduser'
import { updateUserReduser } from './updateuser-reduser.js'
import { reducer as formReducer } from 'redux-form'
import {DisciplinesReduser} from './disciplines-redux'
let redusersBatch = combineReducers({
   newsReduser,
   DisciplinesReduser,
   timetableReduser,
   UserReduser,
   ProfileReduser,
   LoginReduser,
   newUserReduser,
   CadetsReduser,
   updateUserReduser,
   form: formReducer
});


let store = createStore(redusersBatch, applyMiddleware(thunkMiddleware));

export default store;