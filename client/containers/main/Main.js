import React from 'react';
import Nav from '../../components/nav/Nav';
import Media from '../../components/media/Media';

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
            <div className="col-xs-12 main">
              <h1 className="title text-xs-center">The Radio Galaxy</h1>
            </div>
          </div>
          <div className="row">
            <Media />
          </div>
        </div>
      </div>
    )
  }
}