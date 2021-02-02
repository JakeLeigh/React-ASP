import React, {Component, Fragment} from 'react';
import {Button, Model, ModelHeader, ModelBody} from 'reactstrap';
import RegistrationForm from './RegistrationForm';

class RegistrationModel extends React.Component{
  state = {
    model = false
  }
  toggle = () => {
    this.setState(previous => {
      model: !previous.model
    });
  }
  render(){
    const isNew = this.props.isNew;
    let title = 'Edit User';
    let button = '';
    if(isNew){
      title = 'New User',
      button = <Button
              color='success'
              onClick={this.toggle}
              style={{minWidth: '200px'}}>Add</Button>;
    }
    else {
      button = <Button
              color='warning'
              onClick={this.toggle}>Edit</Button>;
    }
    return (
     <Fragment>
        <Model isOpen={this.state.model} toggle={this.toggle} className={this.props.className}>
        <ModelHeader toggle={this.toggle}>{title}</ModelHeader>
        <ModelBody>
          <RegistrationForm
            addUserToState={this.props.addUserToState}
            updateUserIntoState={this.props.updateUserIntoState}
            toggle={this.toggle}
            user={this.props.user} />
        </ModelBody>
      </Model>
     </Fragment>
    )
  }
}

export default RegistrationModel;