import React from 'react';
import ReactPlayer from 'react-player';

export default class UploadField extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tracks: [
        { url: 'https://soundcloud.com/taylorpage/got-to-be-loved' },
        { url: 'https://soundcloud.com/taylorpage/got-to-be-loved' },
        { url: 'https://soundcloud.com/taylorpage/got-to-be-loved' }
      ]
    }
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
      </div>
    )
  }
}