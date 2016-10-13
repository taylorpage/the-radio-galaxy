import React from 'react';
import axios from 'axios';

const path = 'http://127.0.0.1:3000'

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  componentDidMount() {
    this.getTracks();
  }

  handleChange() {
    this.setState({
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    });
  }

  login() {
    axios.post('/user/login', this.state).then((data) => {
      if (data.data) {
        sessionStorage.setItem('email', this.state.email )
        //save email to session
      }
    })
  }

  render() {
    return (
      <div>
        <h3 className="white space">LOGIN</h3>
        <input type="text"
               id="email"
               placeholder="email"
               onChange={ this.handleChange.bind(this) }>
        </input>
        <input type="password"
               id="password"
               placeholder="password"
               onChange={ this.handleChange.bind(this) }>
        </input>
        <button onClick={ this.login.bind(this)  }>Login</button>
      </div>
    )
  }
}