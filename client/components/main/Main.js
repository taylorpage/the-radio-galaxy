import React from 'react';
import Nav from '../nav/Nav';

export default class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Nav />
        <h1 className="col-xs-12 title">The Radio Galaxy</h1>
      </div>
    )
  }
}