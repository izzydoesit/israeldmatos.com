import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swipeable from 'react-swipeable';
import Slider from 'react-slick';
import SwipeableViews from 'react-swipeable-views'
import { throttle } from 'lodash'
import Slide from './Slide';
import SliderArrow from './SliderArrow';
import SliderIndicator from './SliderIndicator';
import ScrollAnimation from 'react-animate-on-scroll'
import './Carousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicking: false
    }
  }

  play = () => {
    this.slider.slickPlay();
  }

  pause = () => {
    this.slider.slickPause();
  }

  handleIndicatorClick = (index, event) => {
    event.preventDefault();
    this.props.updateActiveIndex(index);
    this.slider.slickGoTo(index)
  }

  handleOpenModal = (e) => {
    console.log('opening modal');
    console.log('event on parent slider-cont', e.target, e.currentTarget)

    if (e.clientX > 313 || e.clientX < 700) {
      this.pause();
      this.props.toggleModal(true);
    }
  }



  handleMouseEnter = () => {
    this.props.updateHover(true);
  }

  handleMouseLeave = () => {
    this.props.updateHover(false);
  }

  prevSlide = throttle((e) => {
    console.log('click on arrow', e)
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.slider.slickPrev();
  }, 500, { trailing: false })

  nextSlide = throttle((e) => {
    console.log('click on arrow', e)
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.slider.slickNext();
  }, 500, { trailing: false })

  render() {
    const { projects, isModalOpen, activeIndex, updateActiveIndex } = this.props;
    const settings = {
      dots: true,
      fade: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      focusOnSelect: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      prevArrow: <PrevArrow onClick={this.prevSlide} />,
      nextArrow: <NextArrow onClick={this.nextSlide} />,
      beforeChange: (current, next) => updateActiveIndex(next),
    };


    return (
      <ScrollAnimation
        animateOnce={true}
        animateIn="bounceIn"
        delay={600}
      >
        <div
          className="flex carousel"
        >

            <div className="slider-wrapper">

              <div
                id="gallery"
                className="slider-container"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
              >

                <div
                  className="slide-wrapper"
                  onClick={this.handleOpenModal}
                >
                  <Slider ref={slider => (this.slider = slider)} {...settings}>
                  {projects.map((project, index) => {
                    return <Slide
                      key={index}
                      index={index}
                      project={project}
                      { ...this.props }
                    />
                  })}
                  </Slider>
                </div>

              </div>
            </div>

          <div className="indicator-wrap">
            <ul className="slider-indicators">
              {projects.map((slide, index) =>
                <SliderIndicator
                  key={index}
                  index={index}
                  activeIndex={activeIndex}
                  onClick={this.handleIndicatorClick.bind(this, index)}
                />
              )}
            </ul>
          </div>
        </div>
      </ScrollAnimation>
    );
  }
}

Carousel.propTypes = {
  updateModal: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired
}