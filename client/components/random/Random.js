import React from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';

const path = 'http://127.0.0.1:3000'

export default class Random extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tracks: []
    }
  }

  componentDidMount() {
    this.getTracks();
  }

  getTracks() {
    const context = this;
    axios.get('/tracks/get', data => {
      return data;
    }).then(data => {
      let num = data.data.length;
      let results = [];
      for (let i=0; i<num; i++) {
        let index = Math.floor(Math.random() * data.data.length);
        results.push(data.data.splice(index, 1)[0]);
      }
      context.setState({
        tracks: results
      })
    })
  }

  render() {
    return (
      <div className="container">
        <h3>FlashBack</h3>
        <div> {
          this.state.tracks.map(track => {
            return(
              <div className="col-xs-6">
              <ReactPlayer url={ track.url }
                controls={ true }
                height={ 120 }
                width="100%"
              />
              </div>
            )
          })
        } </div>
      </div>
    )
  }
}