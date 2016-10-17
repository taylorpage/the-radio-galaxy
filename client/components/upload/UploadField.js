import React from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import { Link } from 'react-router';

const path = 'http://127.0.0.1:3000'

export default class UploadField extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      urlInput: '',
      nameInput: '',
      artistInput: '',
      tracks: [],
      pages: [[]],
      errors: [],
      trackPage: 0
    }
  }

  componentDidMount() {
    this.getTracks();
  }

  getTracks() {
    const context = this;
    axios.get('/tracks/all', data => {
      return data;
    }).then(function(data) {
      context.setState({
        tracks: data.data.reverse()
      })
    }).then(() => {
      this.getPages();
    })
  }

  getPages() {
    const context = this;
    let results = [];
    context.state.tracks.reduce((memo, item, i) => {
      memo.push(item);
      if ( (i + 1) % 10 === 0 || i === context.state.tracks.length - 1 ) {
        results.push(memo);
        memo = [];
      }
      return memo;
    }, []);
    context.setState({
      pages: results
    })
  }

  handleChange() {
    this.setState({
      urlInput: document.getElementById('url-input').value,
      nameInput: document.getElementById('name-input').value,
      artistInput: document.getElementById('artist-input').value
    });
  }

  uploadTrack(url) {
    let req = {
      url: this.state.urlInput,
      name: this.state.nameInput,
      artist: this.state.artistInput
    }
    if (!sessionStorage.getItem('user_email')) {
      window.location = `${path}/login`;
    }

    if ( req.url && req.name && req.artist ) {
      if ( req.url.substring(0, 4) === 'http') {
        axios.post('/tracks/create', req, data => {
        }).then(this.getTracks.bind(this));

        document.getElementById('url-input').value = '';
        document.getElementById('name-input').value = '';
        document.getElementById('artist-input').value = '';

        this.setState({
          errors: [],
          urlInput: '',
          nameInput: '',
          artistInput: ''
        })
      } else {
        this.setState({
          errors: [{ text: 'Please use valid url' }]
        })
      }
    } else {
      this.setState({
        errors: [{ text: 'Please fill out all fields' }]
      })
    }
  }

  thumbs(status, url) {
    let email = sessionStorage.getItem('user_email')
    if (email) {
      let firstRequest = {
        status: status,
        url: url
      }

      axios.post('/user/getUser', { email: email }, data => {
        return data.data
      }).then(data => {
        let foundLink = false;
        data.data.votes.forEach(link => {
          if (link === url) {
            foundLink = true;
          }
        })
        if (!foundLink) {
          let secondRequest = {
            email: email,
            update: data.data.votes.concat(url)
          }
          axios.post('/user/updateVotes', secondRequest, (data) => {
          }).then(() => {
            axios.post('/tracks/thumbs', firstRequest, data => {
            }).then(() => {
              this.getTracks();
            })
          })
        } else {
          console.log('didnt work')
        }
      })
    } else {
      window.location = `${path}/login`;
    }
  }

  changeTrackPage(page) {
    this.setState({
      trackPage: page
    })
  }

  render() {
    return (
      <div className="container">
        <div> {
          this.state.errors.map(error => {
            return (
              <div className="error"> { error.text } </div>
            )
          })
        } </div>
        <div className="row">
          <div className="col-md-3 text-center upload">
            <input onChange={ this.handleChange.bind(this) }
                   id="name-input"
                   type="text"
                   placeholder="Track Name">
            </input>
          </div>
          <div className="col-md-3 text-center upload">
            <input onChange={ this.handleChange.bind(this) }
                   id="artist-input"
                   type="text"
                   placeholder="Artist Name">
            </input>
          </div>
          <div className="col-md-3 text-center upload">
            <input onChange={ this.handleChange.bind(this) }
                   id="url-input"
                   type="text"
                   placeholder="Track Link">
            </input>
          </div>
          <div className="col-md-3 upload">
            <button onClick={ this.uploadTrack.bind(this) }>Upload</button>
          </div>
        </div>
        <h3 className="upload-title">Newest Uploads</h3>
        <div> {
          this.state.pages[this.state.trackPage].map(track => {
            return(
              <div className="col-md-12">
                <div className="row">
                  <a href={ track.url }><h4>{ track.name }</h4></a>
                  <h5>{ track.artist }</h5>
                  <button onClick={ this.thumbs.bind(this, 'up', track.url) }>up { track.thumbs.up }</button>
                  <button onClick={ this.thumbs.bind(this, 'down', track.url) }>down { track.thumbs.down }</button>
                  <ReactPlayer url={ track.url }
                    controls={ true }
                    height={ 180 }
                    width="100%"
                  />
                </div>
              </div>
            )
          })
        } </div>
        <div className="col-md-12 text-center"> {
          this.state.pages.map((item, i) => {
            return (
              <button className="track-pages"
                      onClick={ this.changeTrackPage.bind(this, i) }>{ i + 1 }
              </button>
            )
          })
        } </div>
      </div>
    )
  }
}