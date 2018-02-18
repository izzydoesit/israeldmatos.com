import React, { Component } from 'react';
import Slide from './Slide';
import SliderArrow from './SliderArrow';
import SliderIndicator from './SliderIndicator';
import Transition from 'react-transition-group/Transition';
import './Slider.css'

import smarterBear from './smarterbear.png';
import colorGame from './colorGame.png';
import curvaFit from './curvaFit.png';
import hackerHaus from './hackerhaus.png';
import frais from './frais.png';

const slideArray = [
  { title: 'Smarter Bear', url: 'https://smarterbear.herokuapp.com/', blurb: 'Find out what the insiders are trading...', src: smarterBear },
  { title: 'The Color Game', url: 'http://izzydoesit.github.io/colorGame', blurb: 'Test your hex-naming skills here', src: colorGame },
  { title: 'Curva Fitness', url: 'https://curva.herokuapp.com/', blurb: 'Get CURVA fit!', src: curvaFit },
  { title: 'Hackerhaus', url: 'https://hackerhaus.herokuapp.com/', blurb: 'The NEXT best thing in SF housing...', src: hackerHaus },
  { title: 'Frais Recipes', url: 'https://recipesbyfrais.herokuapp.com/', blurb: 'Discover a new crowd-sourced dish or share your fav', src: frais }
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
      <div className="container slider">   

        {/* <div>
          <Transition in={this.state.in} timeout={500} />
          <button onClick={this.toggleEnterState}>Click to Enter</button>
        </div> */}

        <div id="gallery" className="slider-wrapper">

          <SliderArrow 
            direction="left"
            onClick={e => this.goToPrevSlide(e)} 
          />  
          <ul className="slide-list">
              {this.state.slides.map((slide, index) => 
                <Slide 
                  key={index}
                  index={index}
                  activeIndex={this.state.activeIndex}
                  slide={slide}
                />
              )}
          </ul>
          <SliderArrow 
            direction="right"
            onClick={e => this.goToNextSlide(e)} 
          />
        </div>

        <div className="indicator-wrap">
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
        
      </div>
    );
  }
}
