import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Slide.css';

export default class Slide extends Component {

  handleMouseEnter = () => {
    console.log('entered slide')
    this.props.updateHover(true);
  }

  handleMouseLeave = () => {
    this.props.updateHover(false);
  }

  render() {
    const { currentProject } = this.props;
    
    return (
      <div
        className="slide slide-active"
        key={currentProject.id}

      >
        <div 
          className="card" 
        >
          <img
            resizemode="stretch"
            className="slide-pic"
            src={currentProject.pics[0]}
            alt='web project'
          />
        </div>

        <div className="flex card-text" >
          <div className="bold title">
            {currentProject.title}
          </div>
          <div className="blurb">{currentProject.blurb}</div>
        </div>

        <button
          className="card-button modalButton"
        >LEARN MORE</button>
      </div>
    )
  }
}

Slide.propTypes = {
  currentProject: PropTypes.object.isRequired,
  buttonHover: PropTypes.bool.isRequired,
  cardHover: PropTypes.bool.isRequired,
}