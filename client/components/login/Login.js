import React from 'react';
import axios from 'axios';

const path = 'http://127.0.0.1:3000'

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: []
    }
  }

  componentDidMount() {
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
        sessionStorage.setItem('email', this.state.email)
        window.location = path;
      } else {
        this.setState({
          errors: [{ text: 'Email or password is incorrect!'}]
        })
      }
    })
  }

  render() {
    return (
      <div>
        <h3 className="white space">LOGIN</h3>
        <div> {
          this.state.errors.map(error => {
            return (
              <div className="error"> { error.text } </div>
            )
          })
        } </div>
        <input type="text"
               id="email"
               placeholder="email"
               onChange={ this.handleChange.bind(this) }>
        </input>
        <br/>
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