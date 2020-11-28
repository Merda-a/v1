import React from 'react';
import classes from './Timetable.module.css'

export const Lesson = (props) => {
   debugger;
   return (
      <div className={classes.card__lessons} key={props.id}>
         <div className={classes.card__lesson_item}>
            <div className={classes.card__lesson_number}>{props.numberOfLessonInDay}</div>
            <div className={classes.card__lesson_title}>{props.nameOfDiscipline}</div>
            <div className={classes.card__lesson_content}>
               <input className={classes.card__lesson_more} type="text" required placeholder={props.infoForCadets}></input>
               <input className={classes.card__lesson_more} type="text" required placeholder="просьба преподавателю"></input>
            </div>
         </div>
      </div>
   );
}
