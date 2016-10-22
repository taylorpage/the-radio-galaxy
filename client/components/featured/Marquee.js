import React from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';

export default class Marquee extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tracks: []
    }
  }

  componentWillMount() {
    axios.get('/tracks/all', (data) => {
      return data
    }).then((data) => {
      this.setState({
        tracks: data.data
      })
    })
  }

  render() {
    return (
      <div className="row text-center slick-multislider">
        <div className="large-4 small-12 columns">
          <h5 className="h5-title-margin-top">Image Title 1</h5>
          <div className="title-blue-line-content"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, voluptatibus eaque ratione quam natus ad!</p>
        </div>
        <div className="large-4 small-12 columns">
          <h5 className="h5-title-margin-top">Image Title 1</h5>
          <div className="title-blue-line-content"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, voluptatibus eaque ratione quam natus ad!</p>
        </div>
        <div className="large-4 small-12 columns">
          <h5 className="h5-title-margin-top">Image Title 1</h5>
          <div className="title-blue-line-content"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, voluptatibus eaque ratione quam natus ad!</p>
        </div>
        <div className="large-4 columns">
          <h5 className="h5-title-margin-top">Image Title 1</h5>
          <div className="title-blue-line-content"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, voluptatibus eaque ratione quam natus ad!</p>
        </div>
        <div className="large-4 columns">
          <h5 className="h5-title-margin-top">Image Title 1</h5>
          <div className="title-blue-line-content"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, voluptatibus eaque ratione quam natus ad!</p>
        </div>
        <div className="large-4 columns">
          <h5 className="h5-title-margin-top">Image Title 1</h5>
          <div className="title-blue-line-content"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, voluptatibus eaque ratione quam natus ad!</p>
        </div>
      </div>
    )
  }
}