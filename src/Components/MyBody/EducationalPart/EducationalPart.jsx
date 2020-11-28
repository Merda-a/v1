import React from 'react'
import * as axios from 'axios'
import classes from './EducationalPart.module.css'
import { NavLink } from 'react-router-dom';



export class EducationPart extends React.Component {

   componentDidMount() {

   }

   render() {

      return (
         <div className={classes.mainContaineer}>

            <div>
               <NavLink to="/Timetable/" className={classes.app_Timetable}>Расписание занятий</NavLink>
            </div>
            <div>
               <NavLink to="/Users" className={classes.app_Disciplines}>Дисциплины кафедры</NavLink>
            </div>

         </div>);
   }
}

