import React from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';

const path = 'http://127.0.0.1:3000'

export default class UploadField extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tracks: []
    }
  }

  componentDidMount() {
    const context = this;

    axios.get('/tracks/get', function(data) {
      return data;
    }).then(function(data) {
      context.setState({
        tracks: data.data
      })
    })
  }

  theState() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <input type="text"></input>
        <button>Button</button>
        <div> {
          this.state.tracks.map(track => {
            return(
              <ReactPlayer url={ track.url }
                controls={ true }
                height={ 180 }
              />
            )
          })
        }
        </div>
        <button onClick={ this.theState.bind(this) }>Log State</button>
      </div>
    )
  }
}