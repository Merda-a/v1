import React from 'react';
import classes from './List.module.css'
import { reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';




export class ListOfDisciplines extends React.Component {


   render() {
      debugger
      let Disciplines = this.props.disciplines.map((u) => { return <Discipline u={u} delUser={this.props.deleteUser} /> });
      return (
         <div>
            {Disciplines}
         </div>
      )
   }
}

const Discipline = (props) => {
   debugger
   return (
      <div key={props.u.id}>
         <div className={classes.imgBook}>
            <NavLink to={'/Homework/' + props.u.id}>{props.u.name}</NavLink>
         </div>
      </div>);
}
