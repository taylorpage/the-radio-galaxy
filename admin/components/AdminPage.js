import React from 'react';
import axios from 'axios';
import AdminDashboard from './AdminDashboard';
import admin_info from '../config/adminConfig';

const path = 'http://127.0.0.1:3000'

export default class AdminPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  submit() {
    let adminUser = document.getElementById('admin-user').value
    let adminPassword = document.getElementById('admin-password').value

    if (admin_info.user_name == adminUser && admin_info.password == adminPassword) {
      this.setState({
        loggedIn: true
      })
    }
  }

  render() {
    return (
      <div className="container">
        { this.state.loggedIn ? <AdminDashboard /> : 
          <div>
            <input id="admin-user" type="text"></input>
            <input id="admin-password" type="text"></input>
            <button onClick={ this.submit.bind(this) }> Click </button>
          </div>
        }
      </div>
    )
  }
}