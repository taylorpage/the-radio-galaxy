import React from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';

const path = 'http://127.0.0.1:3000'

export default class UploadField extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      urlInput: '',
      nameInput: '',
      artistInput: '',
      tracks: []
    }
  }

  componentDidMount() {
    this.getTracks();
  }

  getTracks() {
    const context = this;
    axios.get('/tracks/get', function(data) {
      return data;
    }).then(function(data) {
      context.setState({
        tracks: data.data
      })
      console.log(data.data);
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
    axios.post('/tracks/create', req, function(data) {

    }).then(this.getTracks.bind(this));
  }

  render() {
    return (
      <div>
        <input onChange={ this.handleChange.bind(this) }
               id="name-input"
               type="text"
               placeholder="Track Name">
        </input><br/>
        <input onChange={ this.handleChange.bind(this) }
               id="artist-input"
               type="text"
               placeholder="Artist Name">
        </input><br/>
        <input onChange={ this.handleChange.bind(this) }
               id="url-input"
               type="text"
               placeholder="Soundcloud Link">
        </input><br/>
        <button onClick={ this.uploadTrack.bind(this) }>Upload</button>
        <h3>Newest Uploads</h3>
        <div> {
          this.state.tracks.map(track => {
            return(
              <ReactPlayer url={ track.url }
                controls={ true }
                height={ 180 }
                width="100%"
              />
            )
          }).reverse()
        }
        </div>
      </div>
    )
  }
}