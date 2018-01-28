import React, { Component } from 'react';
import { goToAnchor } from 'react-scrollable-anchor';
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

        <div className="hero-content">

          <h1>Hello, I am Israel D. Matos</h1>
          <p>also known as @izzydoesit</p>

            <a
              href="#slider"
              className="page-link btn"
              dest="about"
            >
              <div className="btn-text">
                <h2>Show me the goods!</h2>
                <i className="fa fa-3x fa-arrow-right"/>
              </div>
            </a>
        </div>
      </div>
    )
  }
}

export default Hero;