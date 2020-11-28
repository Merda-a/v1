
import React from 'react'
import {  Redirect } from 'react-router-dom';
 import {UpdateUserReduxForm} from './../LecturalReduxForm'


export class UpdateUsers extends React.Component {
    
    state = {
        redirect: false,
        id: null,
    } 

    componentDidMount() {        
        this.state.id = this.props.match.params.id;
    }
    submit = values => {
        debugger
        console.log(values);
        values.countOfChildren = parseInt(values.countOfChildren);
        values.FormSec = parseInt(values.FormSec);
        this.props.updateUser(values).then(
            () => this.setState({ redirect: true })
        );
    }
    render() {

        
        if(!this.props.isAuth)
            return <Redirect to='/AccessDenided' />;

        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/Users' />;
        }        
        console.log(this.props);
        return (
            <div>
                <div >
                    <UpdateUserReduxForm onSubmit={this.submit}
                        optionsMilitaryRank={this.props.militaryRank}
                        optionsPositions={this.props.position}
                        optionsAcademicTitle={this.props.academicTitle}
                        optionsAcademicDegree={this.props.academicDegree}
                        id = {this.state.id}
                    />
                </div>
            </div>);
    }
}
