import React from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';

const path = 'http://127.0.0.1:3000'

export default class UploadField extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      urlInput: '',
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
      urlInput: document.getElementById('url-input').value
    });
  }

  uploadTrack(url) {
    let req = { url: this.state.urlInput }
    axios.post('/tracks/create', req, function(data) {

    }).then(this.getTracks.bind(this));
  }

  render() {
    return (
      <div>
        <input onChange={ this.handleChange.bind(this) } id="url-input" type="text"></input>
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