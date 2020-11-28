import React from 'react'
import { Profile } from './Profile'


export class ProfileClass extends React.Component {

   getProfile(props) {
      let id = this.props.match.params.id;
      this.props.getUserbyId(id);
   }

   componentDidMount() {
      let id = this.props.match.params.id;
      this.props.getUserbyId(id);
   }


   render() {
      return (<Profile {...this.props} ></Profile>);
   }
}
