import React from 'react';
import MediaNav from './Nav.js'

export default class Media extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container">
          <MediaNav />
        </div>
        <div className="container">
          <div className="row">
            <div className="media-body">
              <h1>Media</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}