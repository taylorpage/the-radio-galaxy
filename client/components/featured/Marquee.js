import React from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import Slider from 'react-slick';

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
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 3,
      draggable: true,
      centerMode: true
    };
    return (
      <div className="container">
          <div className="col-lg-12 slider">
            <h1 className="white space">Featured</h1>
            <Slider {...settings}>
              <div className="col-lg-12">
                <h3>Title</h3>
                <a href="https://www.stupid.com">
                  <img src='http://electrohouseworld.com/wp-content/uploads/2015/05/van-buuren.jpg' />
                </a>
              </div>
              <div className="col-lg-12">
                <h3>Title</h3>
                <a href="https://www.stupid.com">
                  <img src='https://upload.wikimedia.org/wikipedia/commons/1/10/Ajax_DJ.jpg' />
                </a>
              </div>
              <div className="col-lg-12">
                <h3>Title</h3>
                <a href="https://www.stupid.com">
                  <img src='http://media.gettyimages.com/photos/axwell-spins-onstage-at-tomorrowworld-electronic-music-festival-on-picture-id182530821' />
                </a>
              </div>
              <div className="col-lg-12">
                <h3>Title</h3>
                <a href="https://www.stupid.com">
                  <img src='http://cdn.c.photoshelter.com/img-get2/I0000OmvBp1DcC6Q/fit=1000x750/DJsnake-Movement-BM-1012.jpg' />
                </a>
              </div>
            </Slider>
          </div>
      </div>
    );
  }
}