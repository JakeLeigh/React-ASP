import React, {Component} from 'react';
import {Table, Button} from 'reactstrap';
import RegistrationModel from './form/RegistrationModel';
import {USERS_API_URL} from '../constants';
import RegistrationForm from './form/RegistrationForm';

class DataTable extends React.Component{
  deleteItem = id => {
    let confirmDeletion = window.confirm('Are you sure you want to delete it?');
    if(confirmDeletion){
      fetch(`${USERS_API_URL}/${id}`, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        this.props.deleteItemFromState(id);
      })
      .catch(err => console.log(err));
    }
  }
  render(){
    const items = this.props.items;
    return (
      <Table striped>
        <thead className='thead-dark'>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Document</th>
            <th>Phone</th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!items || items.length <= 0 ?
          <tr>
            <td colSpan='6' align='center'><b>No Users yet</b></td>
          </tr>  
          : items.map(item => {
            <tr key={item.id}>
              <th scope='row'>
                {item.id}
              </th>
              <td>
                {item.name}
              </td>
              <td>
                {item.email}
              </td>
              <td>
                {item.document}
              </td>
              <td>
                {item.phone}
              </td>
              <td align='center'>
                <div>
                  <RegistrationModel
                    isNew={false}
                    user={item}
                    updateUserIntoState={this.props.updateState}/>
                    &nbsp;&nbsp;&nbsp;
                    <Button color='danger' onClick={() => this.deleteItem(item.id)}>Delete</Button>
                </div>
              </td>
            </tr>
          })
        }
        </tbody>
      </Table>
    )
  }
}
export default DataTable;