import React from 'react';
import axios from 'axios';
import apikey from '../../../server/config/config'

export default class Media extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      genre: '',
      query: '',
      concerts: [],
      lat: 0.0,
      long: 0.0
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        lat: position.coords.latitude.toString(),
        long: position.coords.longitude.toString()
      });
    });
  }

  handleGenreChange() {
    this.setState({
      genre: document.getElementById('genre').value
    });
  }

  handleQueryChange() {
    this.setState({
      query: document.getElementById('query').value
    });
  }

  searchConcerts() {
    axios.post('/concertSearch', this.state)
    .then(response => {
      this.setState({
        concerts: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Events</h2>
        <input id="query" type="text" placeholder="Artist Name" onChange={ this.handleQueryChange.bind(this) }></input>
        <button onClick={ this.searchConcerts.bind(this) }>Search</button>
        <div>
          {
            this.state.concerts.map(concert => {
              return (
                <div className="concert">
                  <div className="title">{ concert.title }</div>
                  <div className="date">{ concert.formatted_datetime }</div>
                  <div className="location">{ concert.formatted_location }</div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}