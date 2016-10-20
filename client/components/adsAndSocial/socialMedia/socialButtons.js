import React from 'react';
import axios from 'axios';

export default class SocialButtons extends React.Component {

  redirect(outlet) {
    let routes = {
      facebook: 'https://www.facebook.com/theradiogalaxy/',
      twitter: 'https://twitter.com/radiogalaxyblog',
      soundCloud: 'http://www.soundcloud.com'
    }
    window.location = routes[outlet]
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-md-right">
            <button className="facebook social-buttons"
                    onClick= { this.redirect.bind(this, 'facebook') }>
            </button>
            <button className="twitter social-buttons"
                    onClick= { this.redirect.bind(this, 'twitter') } >
            </button>
            <button className="soundCloud social-buttons"
                    onClick= { this.redirect.bind(this, 'soundCloud') } >
            </button>
          </div>
        </div>
      </div>
    )
  }
}