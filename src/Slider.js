import React, { Component } from 'react';
import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import SliderIndicator from './SliderIndicator'
import './Slider.css'

import smarterBear from './smarterbear.png';
import colorGame from './colorGame.png';
import curvaFit from './curvaFit.png';
import hackerHaus from './hackerhaus.png';
import frais from './frais.png'

let slideArray = [
  smarterBear,
  colorGame,
  curvaFit,
  hackerHaus,
  frais
]

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = { 
      activeIndex: 0
    }  
  }

  componentWillMount() {
    this.setState({
      slides: slideArray
    });
}

  goToSlide(index) {
    this.setState({activeIndex: index});
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    // let { slides } = this.props;
    let slidesLength = this.state.slides.length;
    
    --index;

    if (index < 0) {
      index = slidesLength - 1;
    }

    this.goToSlide(index);
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    // let { slides } = this.props;
    let slidesLength = this.state.slides.length;

    ++index;

    if (index >= slidesLength) {
      index = 0
    }

    this.goToSlide(index);
  }

  render() {
    return (
      <div className="slider">   

        <LeftArrow onClick={e => this.goToPrevSlide(e)} />  

        <ul className="slides">
          {this.state.slides.map((slide, index) => 
            <Slide 
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          )}
        </ul>

        <RightArrow onClick={e => this.goToNextSlide(e)} />

        <ul className="slider-indicators">
          {this.state.slides.map((slide, index) => 
            <SliderIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              isActive={this.state.activeIndex===index}
              onClick={e => this.goToSlide(index)}
            />
          )}
        </ul>
      </div>
    );
  }
}
