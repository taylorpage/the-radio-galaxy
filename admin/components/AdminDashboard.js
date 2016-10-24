import React from 'react';
import axios from 'axios';

const path = 'http://127.0.0.1:3000';

export default class AdminDashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Dashboard</h1>
      </div>
    )
  }
}