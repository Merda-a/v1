import React from 'react'
import classes from './Users.module.css'
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

const DisplayControl = (props) => {
    return (
        <div>
            <button id="btn-more" className={classes.card__more_btn}>подробнее</button>
            <NavLink to={'/Profile/' + props.man.id}
                className={classes.card__more_btn} >подробнее</NavLink>
            <button id="btn-more" className={classes.card__update_btn}>изменить</button>
            <NavLink to={'/updateUser/' + props.man.id}
                className={classes.card__update_btn} >изменить</NavLink>
            <button id="btn-more" className={classes.card__del_btn} onClick={props.delUser}>удалить</button>
        </div>);
}

const UsersDisplay = (props) => {
    
    let delUser = () => {
        debugger;
        props.delUser(props.u.id)
    }
if(!props.role === "Admin"){
    return (
        <div>
            <div key={props.u.id}>
                <div className={classes.container}>
                    <div id="card" className={classes.card}>
                        <div className={classes.card__img}></div>
                        <div className={classes.card__descr}>
                            <div className={classes.card__descr_block}>{props.u.militaryRank}</div>
                            <div className={classes.card__descr_block}>{props.u.firstName}</div>
                            <div className={classes.card__descr_block}>{props.u.middleName}</div>
                            <div className={classes.card__descr_block}>{props.u.lastName}</div>
                            <div className={classes.card__descr_block}>{props.u.position}</div>
                            <div className={classes.card__descr_block}>{props.u.birthDay}</div>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
    );
}
else{
    return(
    <div>
            <div key={props.u.id}>
                <div className={classes.container}>
                    <div id="card" className={classes.card}>
                        <div className={classes.card__img}></div>
                        <div className={classes.card__descr}>
                            <div className={classes.card__descr_block}>{props.u.militaryRank}</div>
                            <div className={classes.card__descr_block}>{props.u.firstName}</div>
                            <div className={classes.card__descr_block}>{props.u.middleName}</div>
                            <div className={classes.card__descr_block}>{props.u.lastName}</div>
                            <div className={classes.card__descr_block}>{props.u.position}</div>
                            <div className={classes.card__descr_block}>{props.u.birthDay}</div>
                        </div>
                            <DisplayControl man={props.u} delUser={delUser}/>
                        </div>
                    </div>
                </div>
            </div>
        );
}
}

const SetFilter = (props) => {
    let militaryRankOptions = props.optionsMilitaryRank.map(u => {
        return (
            <option value={u.name}>{u.name}</option>
        )
    });
    let positionOptions = props.optionsPositions.map(u => {
        return (
            <option value={u.name}>{u.name}</option>
        )
    });
    let academicTitleOptions = props.optionsAcademicTitle.map(u => {
        return (
            <option value={u.name}>{u.name}</option>
        )
    });
    let academicDegreeOptions = props.optionsAcademicDegree.map(u => {
        return (
            <option value={u.name}>{u.name}</option>
        )
    });
    return (
        <form onSubmit={props.handleSubmit}>
            <div >
                <label>Фимилия  </label>
                <Field placeholder={"Enter number of lastname"} name={"lastName"} component={'input'} />
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
                <label>воинское звание</label>
                <div>
                    <Field name="militaryRank" component="select">
                        {militaryRankOptions}
                    </Field>
                </div>
            </div>
            <div>
                <label>должность</label>
                <div>
                    <Field name="position" component="select">
                        {positionOptions}
                    </Field>
                </div>
            </div>
            <div>
                <label>Форма</label>
                <div>
                    <Field name="formSec" component="select">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </Field>
                </div>
            </div>
            <div>
                <label>Научная степень</label>
                <div>
                    <Field name="academicDegree" component="select">
                        {academicDegreeOptions}
                    </Field>
                </div>
            </div>
            <div>
                <label>Научное звание</label>
                <div>
                    <Field name="academicTitle" component="select">
                        {academicTitleOptions}
                    </Field>
                </div>
            </div>
            <button className={classes.button}>Show</button>
        </form>);
}

const SetFilterR = reduxForm({
    form: 'Filter'
})(SetFilter)


export class Users extends React.Component {

    componentDidMount() {
        this.props.getUser();
        this.getData();
    }
    getData() {
        this.props.setPosition();
        this.props.setMilitaryRank();
        this.props.setAcademicDegree();
        this.props.setAcademicTittes();
    }

    IsInRole(role, needRole) {
        if ((Array.isArray(role))) {
            for (let i = 0; i < role.length; i++) {
                if (role[i] === needRole)
                    return true;
            }
            return false;
        } else {
            if (role === needRole) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    submit = values => {
        console.log(values);
        values.FormSec = parseInt(values.FormSec);
        this.props.getFilteredUser(values)
    }
    render() {

        console.log(this.props);

        if (!this.props.isAuth) {
            window.location = "/AccessDenided";
        }
        if (this.IsInRole(this.props.role, "Admin")) {
            let AllUsers = this.props.users.map((u) => { return <UsersDisplay u={u} delUser={this.props.deleteUser} role="Admin" /> });

            return (
                <div className={classes.gridMain}>
                    <div className={classes.gridLeftSide}>
                        <NavLink to="/newUser" className={classes.card__more_btn}>Добавить</NavLink>
                        <SetFilterR onSubmit={this.submit}
                            optionsMilitaryRank={this.props.militaryRank}
                            optionsPositions={this.props.position}
                            optionsAcademicTitle={this.props.academicTitle}
                            optionsAcademicDegree={this.props.academicDegree}
                            role="Admin" />
                    </div>
                    <div>
                        {AllUsers}
                    </div>
                </div>);
        }
        if (this.IsInRole(this.props.role, "lectural")) {
            let AllUsers = this.props.users.map((u) => { return <UsersDisplay u={u} delUser={this.props.deleteUser} role="lectural" /> });

            return (
                <div className={classes.gridMain}>
                    <div className={classes.gridLeftSide}>
                        <SetFilterR onSubmit={this.submit}
                            optionsMilitaryRank={this.props.militaryRank}
                            optionsPositions={this.props.position}
                            optionsAcademicTitle={this.props.academicTitle}
                            optionsAcademicDegree={this.props.academicDegree}
                        />
                    </div>
                    <div>
                        {AllUsers}
                    </div>
                </div>);
        }
        if (this.IsInRole(this.props.role, "cadet")) {
            let AllUsers = this.props.users.map((u) => { return <UsersDisplay u={u} delUser={this.props.deleteUser} role="cadet" /> });
            return (<div>{AllUsers}</div>)
        }
        else {
            window.location = "/AccessDenided";
        }

    }
}
