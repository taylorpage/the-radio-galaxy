import React from 'react';

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

  render() {
    return (
      <div className="row">
        <div className="col-md-12 navbar">
          <a className="col-md-2 text-md-left white space" href="#">The Radio Galaxy</a>
          <a className="col-md-1 offset-md-8 white" href="#"> { 
            this.state.logged_in ? 'Sign Out' : 'Sign In'
          }</a>
          <a className="col-md-1 white" href="#">Sign Up</a>
        </div>
      </div>
    )
  }
}