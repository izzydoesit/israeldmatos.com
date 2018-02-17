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
  { title: 'Smarter Bear', src: smarterBear },
  { title: 'The Color Game', src: colorGame },
  { title: 'Curva Fitness', src: curvaFit },
  { title: 'Hackerhaus', src: hackerHaus },
  { title: 'Frais Recipes', src: frais }
]

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
}

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        I'm a fade transition!
      </div>
    )}
  </Transition>
  )

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
