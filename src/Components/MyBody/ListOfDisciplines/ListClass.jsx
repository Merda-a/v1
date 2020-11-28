import React from 'react';
import { reduxForm } from 'redux-form';
import { ListOfDisciplines } from './ListOfDisciplines'
import { NavLink } from 'react-router-dom';
import classes from './List.module.css'


export class ListClass extends React.Component {

   getList(props) {
      let id = this.props.match.params.id;
      this.props.getUserbyId(id);
   }

   render() {
      return (
         <div>
            <ListOfDisciplines {...this.props} />
            <ListReduxForm onSubmit={this.submit} role={this.props.user.list} />
         </div>)
   }
}

const ListFormRedux = (props) => {

   return (
      <form onSubmit={props.handleSubmit}>
         <div className={classes.Book}>
            <div className={classes.imgBook}>
               <NavLink to="/Homework">Предмет 1</NavLink>
            </div>
            <div className={classes.imgBook1}>
               <NavLink to="/Homework1">Предмет 2</NavLink>
            </div>
            <div className={classes.imgBook2}>
               <NavLink to="/Homework2">Предмет 3</NavLink>
            </div>
            <div className={classes.imgBook3}>
               <NavLink to="/Homework3">Предмет 4</NavLink>
            </div>
            <div className={classes.imgBook4}>
               <NavLink to="/Homework4">Предмет 5</NavLink>
            </div>
            <div className={classes.imgBook5}>
               <NavLink to="/Homework5">Предмет 6</NavLink>
            </div>
         </div>
      </form >
   );
}

const ListReduxForm = reduxForm({
   form: 'group'
})(ListFormRedux)


