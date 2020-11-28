import React from 'react'
import classes from './chief.module.css'
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export class Chief extends React.Component {

   constructor(props) {
      super(props);
      if (!this.props.isAuth)
         this.toHistory();
   }
   componentDidMount() {

   }

   toHistory() {
      window.location = "/History";
   }
   render() {

      return (
         <div className={classes.mainContaineer}>
            <div className={classes.app_Cadets}>
               <NavLink to="/Cadets">Курсанты</NavLink>
            </div>
            <div className={classes.app_Officer}>
               <NavLink to="/Users">Офицеры</NavLink>
            </div>
            <div className={classes.app_Aud}>
               <NavLink to="/Auditore">Аудитории</NavLink>
            </div>
            <div className={classes.app_Technick}>
               <NavLink to="/Tecknik">Техника</NavLink>
            </div>
            <div className={classes.app_Hist}>
               <NavLink to="/History">История</NavLink>
            </div>
         </div>
      );
   }
}

