import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import DataTable from './DataTable';
import RegistrationModel from './form/RegistrationModel';
import {USERS_API_URL} from '../constants';

class Home extends React.Component{
  state = {
    items: []
  }
  componentDidMount(){
    this.getItems();
  }
  getItems = () => {
    fetch(USERS_API_URL)
      .then(res => res.json())
      .then(res => this.setState({items: res}))
      .catch(err => console.log(err))
  }
  addUserToState = user => {
    this.setState(previous => ({
      items : [...previous.items, user]
    }))
  }
  updateState = () => {
    this.getItems();
  }
  deleteItemFromState = id => {
    const updated = this.state.items.filter(item => item.id !== id);
    this.setState({items: updated});
  }

  render(){
    return (
      <Container style={{paddingTop: '100px'}}>
        <Row>
          <Col>
            <h3>React + ASP.NET CRUD App</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable
            items={this.state.items}
            updateState={this.updateState}
            deleteItemFromState={this.deleteItemFromState}/>
          </Col>
        </Row>
        <Row>
          <Col>
          <RegistrationModel isNew={true} addUserToState={this.state.addUserToState}/>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Home;