import React from 'react';
import classes from './Home.module.css'
import { reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';
import Doc from '../Documents/Document.doc';






export class Homework extends React.Component {
   render() {
      return (
         <div>
            <HomeReduxForm onSubmit={this.submit} role={this.props.user.profile} />
         </div>
      )
   }
}


const HomeFormRedux = (props) => {

   return (
      <form onSubmit={props.handleSubmit}>
         <div className={classes.First}>
            <div className={classes.Nav}>
               <div class={classes.dropdown}>
                  <button className={classes.dropbtn}>Лекции</button>
                  <div className={classes.dropdowncontent}>
                     <div className={classes.firstles}>
                        <a href={Doc} >Лекция 1</a>
                     </div>
                     <div className={classes.secondles} >
                        <NavLink to="./lessons2">Лекция 2</NavLink>
                     </div>
                     <div className={classes.thirdles}>
                        <NavLink to="./lessons3">Лекция 3</NavLink>
                     </div>
                  </div>
               </div>

               <div class={classes.dropdown}>
                  <button className={classes.dropbtn}>ПЗ</button>
                  <div className={classes.dropdowncontent}>
                     <div className={classes.firstpz}>
                        <NavLink to="./pz1">ПЗ 1</NavLink>
                     </div>
                     <div className={classes.secondpz} >
                        <NavLink to="./pz2">ПЗ 2</NavLink>
                     </div>
                     <div className={classes.thirdpz}>
                        <NavLink to="./pz3">ПЗ 3</NavLink>
                     </div>
                  </div>
               </div>

               <div class={classes.dropdown}>
                  <button className={classes.dropbtn}>ГЗ</button>
                  <div className={classes.dropdowncontent}>
                     <div className={classes.firstgz}>
                        <NavLink to="./gz1">ГЗ 1</NavLink>
                     </div>
                     <div className={classes.secondgz} >
                        <NavLink to="./gz2">ГЗ 2</NavLink>
                     </div>
                     <div className={classes.thirdgz}>
                        <NavLink to="./gz3">ГЗ 3</NavLink>
                     </div>
                  </div>
               </div>
               <div class={classes.dropdown}>
                  <button className={classes.dropbtn}>ВИДЕО</button>
                  <div className={classes.dropdowncontent}>
                     <div className={classes.firstv}>
                        <NavLink to="./video1">Видео 1</NavLink>
                     </div>
                     <div className={classes.secondv} >
                        <NavLink to="./video2">Видео 2</NavLink>
                     </div>
                     <div className={classes.thirdv}>
                        <NavLink to="./video3">Видео 3</NavLink>
                     </div>
                  </div>
               </div>
               <div class={classes.dropdown}>
                  <button className={classes.dropbtn}>ЛИТЕРАТУРА</button>
                  <div className={classes.dropdowncontent}>
                     <div className={classes.firstlit}>
                        <NavLink to="./lit1">Литература 1</NavLink>
                     </div>
                     <div className={classes.secondlit} >
                        <NavLink to="./lit2">Литература 2</NavLink>
                     </div>
                     <div className={classes.thirdlit}>
                        <NavLink to="./lit3">Литература 3</NavLink>
                     </div>
                  </div>
               </div>

            </div>


            <div className={classes.Content}>

               <h1>Содержание </h1>
            </div>
         </div>

      </form >
   );
}



const HomeReduxForm = reduxForm({
   form: 'group'
})(HomeFormRedux)

