import React from 'react'
import classes from "./auth.module.css"
import { LogOutMe, AuthMe } from '../../../API/authAPI';

export class AuthClass extends React.Component {
   successCallback = (user) => {
      console.log(user);
   };

   errorCallback = (error) => {
      console.error(error);
   };
   login() {
      AuthMe();
   }
   logout() {
      LogOutMe();
   }
   Register() {
      window.location.href = "http://localhost:5001/Account/Register";
   }
   render() {
      console.log(this.props);
      var name = this.props.AuthClass.loginPage.user.name;
      if (this.props.AuthClass.loginPage.isLoadingUser) {
         return (
            <div className={classes.AuthHeader}>
               <div>{name}</div>
               <button onClick={this.logout} >Logout</button>
            </div>
         );
      }
      else {
         return (
            <div className={classes.AuthHeader}>
               <div className={classes.buttonContainer}>
                  <button onClick={this.login} >Login</button>
                  <button onClick={this.Register}>Register</button>
               </div>
            </div >
         );
      }
   }
}