import React, { Component } from 'react';
import background from './office-view.jpg';
import RotatingArrow from './RotatingArrow';
import './Hero.css'

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotate: 0
    }
  }

  enter() {
    this.setState({rotate: 90});
  }

  leave() {
    this.setState({rotate: 0});
  }

  render() {
    return (
      <div className="hero">

        <div className="hero-image">
          <img 
            className="hero-bg" 
            src={ background }
            resizemode="cover"
            alt='background'
          />
        </div>

        <div className="hero-content">

          <h1>Hello, I'm <span className="name">Israel D. Matos.</span></h1>
          <p>I'm a full-stack web developer.</p>

          <a
            href="#about"
            className="page-link-btn"
            role="button"
            onMouseOver={this.enter.bind(this)}
            onMouseLeave={this.leave.bind(this)}           
          > 
            <div className="btn-content">

              <span className="btn-text">
                Prove it!
              </span>

              <RotatingArrow rotate={this.state.rotate}/>
            </div>
          </a>
        </div>
      </div>
    )
  }
}

export default Hero;
