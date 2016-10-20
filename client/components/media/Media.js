import React from 'react';
import MediaNav from './Nav.js';
import ConcertSearch from '../concertSearch/ConcertSearch';
import UploadField from '../upload/UploadField';
import Random from '../random/Random';
import Articles from '../articles/Articles';
import TopTracks from '../topTracks/TopTracks';

export default class Media extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container">
          <TopTracks />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="media-body">
              <div className="col-lg-7">
                <UploadField />
              </div>
              <div className="col-lg-5">
                <Articles />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}