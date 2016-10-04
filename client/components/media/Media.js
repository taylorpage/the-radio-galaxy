import React from 'react';
import MediaNav from './Nav.js';
import ConcertSearch from '../concertSearch/ConcertSearch';
import UploadField from '../upload/UploadField';

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
              <div className="col-xs-10">
                <UploadField />
              </div>
              <div className="col-xs-2">
                <ConcertSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}