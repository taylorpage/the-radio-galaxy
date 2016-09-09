import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <div className="col-xs-12 nav">
        <a className="link" href="#">Sign In</a>
        <a className="link" href="#">Sign Up</a>
      </div>
    )
  }
}