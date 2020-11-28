import React from 'react'
import classes from './newLectural.module.css'
import {  Redirect } from 'react-router-dom';
import { NewUserReduxFormR } from '../LecturalReduxForm';



export class NewUsers extends React.Component {
    state = {
        redirect: false
    }


    componentDidMount() {
        this.getData();
    }
    getData() {
        this.props.setPosition();
        this.props.setMilitaryRank();
        this.props.setAcademicDegree();
        this.props.setAcademicTittes();
    }
    submit = values => {
        console.log(values);
        values.countOfChildren = parseInt(values.countOfChildren);
        values.FormSec = parseInt(values.FormSec);
        this.props.createUser(values).then(
            () => this.setState({ redirect: true })
        );
    }
    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/Users' />;
        }
        console.log(this.props);
        return (
            <div>
                <div >
                    <NewUserReduxFormR onSubmit={this.submit}
                        optionsMilitaryRank={this.props.militaryRank}
                        optionsPositions={this.props.position}
                        optionsAcademicTitle={this.props.academicTitle}
                        optionsAcademicDegree={this.props.academicDegree}
                    />
                </div>
            </div>);
    }
}

