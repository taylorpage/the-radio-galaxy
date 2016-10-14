import React from 'react';

const path = 'http://127.0.0.1:3000'

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logged_in: false
    }
  }

  componentWillMount() {
    if (sessionStorage.getItem('user_email')) {
      this.setState({
        logged_in: true
      })
    }
  }

  toggle_login() {
    if (this.state.logged_in) {
      sessionStorage.clear();
      this.setState({
        logged_in: false
      })
    } else {
      window.location = `${path}/login`
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12 navbar">
          <a className="col-md-2 text-md-left white space" href="#">The Radio Galaxy</a>
          <a className="col-md-1 offset-md-8 white"
             onClick={ this.toggle_login.bind(this) }> { 
            this.state.logged_in ? 'Sign Out' : 'Sign In'
          }</a>
          <a className="col-md-1 white" href="#">Sign Up</a>
        </div>
      </div>
    )
  }
}