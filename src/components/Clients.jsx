import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return (
      <div>
        <h2>Auto Play</h2>
        <Slider {...settings}>
          <div>
            <img src="path/to/image1.jpg" alt="1" />
          </div>
          <div>
            <img src="path/to/image2.jpg" alt="2" />
          </div>
          <div>
            <img src="path/to/image3.jpg" alt="3" />
          </div>
          <div>
            <img src="path/to/image4.jpg" alt="4" />
          </div>
          <div>
            <img src="path/to/image5.jpg" alt="5" />
          </div>
          <div>
            <img src="path/to/image6.jpg" alt="6" />
          </div>
          {/* Añade más imágenes si lo necesitas */}
        </Slider>
      </div>
    );
  }
}
