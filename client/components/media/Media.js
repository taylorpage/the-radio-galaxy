import React from 'react';
import MediaNav from './Nav.js';
import ConcertSearch from '../concertSearch/ConcertSearch';
import Tracks from '../tracks/Tracks';
import Random from '../random/Random';
import Articles from '../articles/Articles';
import TopTracks from '../topTracks/TopTracks';
import Marquee from '../featured/Marquee';

export default class Media extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="marquee">
              <Marquee />
            </div>
          </div>
        </div>
        <div className="container">
          <TopTracks />
          <div className="row">
            <div className="media-body">
              <div className="col-lg-6">
                <Tracks />
              </div>
              <div className="col-lg-6">
                <Articles />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}