import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 navbar">
          <a className="col-md-2 text-md-left white logo" href="#">The Radio Galaxy</a>
          <a className="col-md-1 offset-md-8 white" href="#">Sign In</a>
          <a className="col-md-1 white" href="#">Sign Up</a>
        </div>
      </div>
    )
  }
}