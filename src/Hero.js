import React, { Component } from 'react';
import background from './office-view.jpg';
import './Hero.css'

class Hero extends Component {

  render() {
    return (
      <div className="hero">

        <div className="hero-image">
          <img 
            className="hero-bg" 
            src={ background }
            alt='background'
          />
        </div>

        <div className="hero-text">
          <h1>Israel D. Matos</h1>
          <button>Portfolio</button>
        </div>

      </div>
    )
  }
}

export default Hero;