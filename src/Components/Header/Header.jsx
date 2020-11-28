import React from 'react';
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';
import { AuthClass } from './Auth/Auth';
import AuthComponent from './Auth/AuthComponent';


const Header = () => {

   return (
      <header className={classes.MyHeader}>
         <div className={classes.headerContent}>
            <div className={classes.headerXZ}>

            </div>
            <div className={classes.buttonContainer}>
               <NavLink to="/MyNews" className={classes.buttomHeader}>Новости</NavLink>
               <NavLink to="/EducationPage" className={classes.buttomHeader}>Учеба</NavLink>
               <NavLink to="/Users" className={classes.buttomHeader}>Наука</NavLink>
               <NavLink to="/Chief" className={classes.buttomHeader}>Кафедра</NavLink>
               <NavLink to="/Timetable" className={classes.buttomHeader}>ЭУМК</NavLink>
            </div>
            <AuthComponent />
         </div>

      </header>
   );
}

export default Header;