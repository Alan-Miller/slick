import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import imgs from './imgs'

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      pauseOnHover: true,
      // fade: true,
      // slidesToShow: 5,
      // slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };

    const fontSize = text => ({ fontSize: `${~~(65 / text.length)}vh` })

    return (
      <div className="SimpleSlider">

        <Slider {...settings}>
          {imgs.map(img => (
            <div
              key={img.id}
              className="slide"
              style={{ backgroundImage: `url(${img.url})` }}
            >
              <span className="slideText" style={fontSize(img.text)}>{img.text}</span>
              {/* <span className="slideText2">{img.text}</span> */}
            </div>
          ))}
        </Slider>

      </div>
    );
  }
}