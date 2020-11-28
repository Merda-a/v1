
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import classes from './Cadets.module.css'

const CadetsDisplay = (props) => {
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
                            <div className={classes.card__descr_block}>{props.u.groupNumber}</div>
                        </div>

                        <button id="btn-more" className={classes.card__update_btn}>изменить</button>
                        <NavLink to={'/updateUser/' + props.u.id}
                            className={classes.card__update_btn} >изменить</NavLink>
                        <button id="btn-more" className={classes.card__del_btn} >удалить</button>

                    </div>
                </div>
            </div>
        </div>
    );
}


const SetFilterCadets = (props) => {
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
return(
    <div>
       
    </div>
);
    }
export class CadetsClass extends React.Component {

    componentDidMount() {
        this.props.getCadets();
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
    render() {
debugger;
        console.log(this.props);
        let AllCadtes = this.props.cadets.map((u) => { return <CadetsDisplay u={u} /> });

        if (!this.props.isAuth) {
            window.location = "/AccessDenided";
        }

        if (this.IsInRole(this.props.role, "Admin")) {
            return (
                <div className={classes.gridMain}>
                    <div className={classes.gridLeftSide}>
                        <NavLink to="/newUser" className={classes.card__more_btn}>Добавить</NavLink>
                        <SetFilterCadets optionsMilitaryRank={this.props.militaryRank}
                            optionsPositions={this.props.position} />
                    </div>
                    <div>
                        {AllCadtes}
                    </div>
                </div>);
        };
        if (this.IsInRole(this.props.role, "lectural")) {
            return (
                <div className={classes.gridMain}>
                    <div className={classes.gridLeftSide}>
                        <SetFilterCadets optionsMilitaryRank={this.props.militaryRank}
                            optionsPositions={this.props.position} />
                    </div>
                    <div>
                        {AllCadtes}
                    </div>
                </div>);
        };
        if (this.IsInRole(this.props.role, "cadets")) {
            return (<div>{AllCadtes}</div>);
        }
        else{
            window.location = "/AccessDenided";
        }

    }
}