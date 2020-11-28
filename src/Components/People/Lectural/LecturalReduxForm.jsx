import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { getLecturalForUpdateThunkCreator } from './../../../Redux/updateuser-reduser';







const renderInput = field => (
   <div>
      <input {...field.input} type={field.type} />
      {
         field.meta.touched &&
         field.meta.error &&
         <span >{field.meta.error}</span>
      }
   </div>
);

let NewUserReduxForm = (props) => {
   let _positionOptions = props.optionsPositions.map(u => {
      return (
         <option value={u.name}>{u.name}</option>
      )
   });
   let _academicTitleOptions = props.optionsAcademicTitle.map(u => {
      return (
         <option value={u.name}>{u.name}</option>
      )
   });
   let _academicDegreeOptions = props.optionsAcademicDegree.map(u => {
      return (
         <option value={u.name}>{u.name}</option>
      )
   });
   let _militaryRankOptions = props.optionsMilitaryRank.map(u => {
      return (
         <option value={u.name}>{u.name}</option>
      )
   });
   if (props.id) {
      debugger

      props.getCurrLectural(props.id);

   }


   return (
      <form onSubmit={props.handleSubmit}>
         <div >

            <div >
               <label>Фимилия  </label>
               <Field placeholder={"Фамилия"} name={"lastName"} component={'input'} />
            </div>
            <div >
               <label>Имя  </label>
               <Field placeholder={"Enter number of name"} name={"firstName"} component={'input'} />
            </div>
            <div >
               <label>Отчество  </label>
               <Field placeholder={"Enter number of middleName"} name={"middleName"} component={'input'} />
            </div>
            <div>
               <label>Дата рождения  </label>
               <Field component={'input'} type="date" data-date="" data-date-format="DD MMMM YYYY" name={"birthDay"} />
            </div>
            <div>
               <label >Холост/Замужем</label>
               <div>
                  <Field name="isMarried" id="isMarried" component="input" type="checkbox" />
               </div>
            </div>

            <div >
               <label>Серия и номер пасспорта  </label>
               <Field placeholder={"Enter number of middleName"} name={"serialAndNumderCivilyDocs"} component={'input'} />
            </div>
            <div >
               <label>Кем выдан</label>
               <Field placeholder={"Enter number of middleName"} name={"whoGetPassport"} component={'input'} />
            </div>
            <div>
               <label>Даты выдачи </label>
               <Field component={'input'} type="date" data-date="" data-date-format="DD MMMM YYYY" name={"dateOfIssue"} />
            </div>
            <div>
               <label>До какого действует</label>
               <Field component={'input'} type="date" data-date="" data-date-format="DD MMMM YYYY" name={"dateOfExpiry"} />
            </div>
            <div>
               <label>Дата начало службы  </label>
               <Field component={'input'} type="date" data-date="" data-date-format="DD MMMM YYYY" name={"dateOfStartService"} />
            </div>
            <div >
               <label>Каким военкоматом призван</label>
               <Field name={"nameOFVoinkom"} component={'input'} />
            </div>
            <div >
               <label>Серия и номер служебного удостоверения  </label>
               <Field name={"serialAndNumderMilitaryDocs"} component={'input'} />
            </div>
            <div >
               <label>Фото большое</label>
               <Field name={"pathPhotoBig"} component={renderInput} type="file" />
            </div>
            <div >
               <label>Фото маленькое</label>
               <Field name={"pathPhotoSmall"} component={'input'} />
            </div>
            <div>
               <label>Форма</label>
               <div>
                  <Field name="FormSec" component="select">
                     <option value={1}>1</option>
                     <option value={2}>2</option>
                     <option value={3}>3</option>
                  </Field>
               </div>
            </div>
            <div>
               <label>Дети</label>
               <div>
                  <Field name="countOfChildren" component="select">
                     <option value={1}>1</option>
                     <option value={2}>2</option>
                     <option value={3}>3</option>
                  </Field>
               </div>
            </div>
            <div>
               <label>До какого действует форма</label>
               <Field component={'input'} type="date" data-date="" data-date-format="DD MMMM YYYY" name={"DateFormSec"} />
            </div>
            <div>
               <label>воинское звание</label>
               <div>
                  <Field name="MilitaryRank" component="select">
                     {_militaryRankOptions}
                  </Field>
               </div>
            </div>
            <div>
               <label>должность</label>
               <div>
                  <Field name="Position" component="select">
                     {_positionOptions}
                  </Field>
               </div>
            </div>
            <div>
               <label>Научная степень</label>
               <div>
                  <Field name="AcademicDegree" component="select">
                     {_academicDegreeOptions}
                  </Field>
               </div>
            </div>
            <div>
               <label>Научное звание</label>
               <div>
                  <Field name="AcademicTitle" component="select">
                     {_academicTitleOptions}
                  </Field>
               </div>
            </div>
            <div>
               <label>О себе</label>
               <div>
                  <Field name="info" component="textarea" />
               </div>
            </div>
         </div>
         <button >Create</button>
      </form>
   );
};

export const NewUserReduxFormR = reduxForm({
   form: 'newUser'
})(NewUserReduxForm)

let maptoStateToProps = (state) => {
   return {
      initialValues: state.updateUserReduser.updateUserPage.lectural
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      getCurrLectural: (id) => {
         dispatch(getLecturalForUpdateThunkCreator(id));
      }
   }
}

export const UpdateUserReduxForm = connect(maptoStateToProps, mapDispatchToProps)(NewUserReduxFormR);

