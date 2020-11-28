import React from 'react';
import classes from './Lesson.module.css'
import { reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';


export class Lesson extends React.Component {
   render() {
      return (
         <div>
            <LessonReduxForm onSubmit={this.submit} role={this.props.user.profile} />
         </div>
      )
   }
}


const LessonFormRedux = (props) => {

   return (
      <form onSubmit={props.handleSubmit}>


         <div className={classes.Content}>

            <h1>Документ</h1>

         </div>


      </form >
   );
}



const LessonReduxForm = reduxForm({
   form: 'group'
})(LessonFormRedux)

