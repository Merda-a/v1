import React from 'react';
import classes from './List.module.css'
import { reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';




export class Homework1 extends React.Component {
   render() {
      return (
         <div>
            <HomeReduxForm onSubmit={this.submit} role={this.props.user.profile} />
            <div>
               <button>ок</button>
            </div>
         </div>
      )
   }
}


const HomeFormRedux = (props) => {

   return (
      <form onSubmit={props.handleSubmit}>

         <div className={classes.home}>
            <NavLink to="Homework1/home">PZ</NavLink>
         </div>


      </form >
   );
}



const HomeReduxForm = reduxForm({
   form: 'group'
})(HomeFormRedux)

