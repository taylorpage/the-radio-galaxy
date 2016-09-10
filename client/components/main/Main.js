import React from 'react';
import Nav from '../nav/Nav';

export default class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <Nav />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className="title">The Radio Galaxy</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}