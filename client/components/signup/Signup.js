import React from 'react';
import axios from 'axios';

const path = 'http://127.0.0.1:3000'

export default class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      website: '',
      location: '',
      email: '',
      password: '',
      errors: []
    }
  }

  handleChange() {
    this.setState({
      name: document.getElementById('signup_name').value,
      website: document.getElementById('signup_website').value,
      location: document.getElementById('signup_location').value,
      email: document.getElementById('signup_email').value,
      password: document.getElementById('signup_password').value,
    });
  }

  signup() {
  	let errors = false, errorMessage = 'Email is already in use';
  	for (let item in this.state) {
  		if (this.state[item] === '') {
  			errors = true;
  			errorMessage = 'All fields are required'
  		}
  	}

  	if (this.state.email.indexOf('@') === -1) {
  		errors = true;
  		errorMessage = 'Must use valid email address'
  	}

  	axios.post('/user/checkEmails', this.state).then((data) => {
  		return data
  	}).then((data) => {
  		if (!data.data && !errors) {
		    axios.post('/user/create', this.state).then((data) => {
	        sessionStorage.setItem('user_email', this.state.email)
	        window.location = path;    
		    })
	    } else {
		   	this.setState({
			    errors: [{ text: errorMessage }]
			  })
	    }
    });
  }

  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="text-xs-center form">
	        <h1 className="white space text-xs-center">SIGN UP</h1>
	        <div> {
	          this.state.errors.map(error => {
	            return (
	              <div className="error"> { error.text } </div>
	            )
	          })
	        } </div>
	        <input type="text"
	               id="signup_name"
	               placeholder="name"
	               onChange={ this.handleChange.bind(this) }>
	        </input>
	        <br/>
	        <input type="text"
	               id="signup_website"
	               placeholder="website"
	               onChange={ this.handleChange.bind(this) }>
	        </input>
	        <br/>
	        <input type="text"
	               id="signup_location"
	               placeholder="location"
	               onChange={ this.handleChange.bind(this) }>
	        </input>
	        <br/>
	        <input type="text"
	               id="signup_email"
	               placeholder="email"
	               onChange={ this.handleChange.bind(this) }>
	        </input>
	        <br/>
	        <input type="password"
	               id="signup_password"
	               placeholder="password"
	               onChange={ this.handleChange.bind(this) }>
	        </input>
	        <br/>
	        <button onClick={ this.signup.bind(this) }>Create Account</button>
	        <br/>
	        <a href="/login">or login</a>
	        </div>
        </div>
      </div>
    )
  }
}