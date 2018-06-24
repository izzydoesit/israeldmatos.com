import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModalLauncher from '../Modal/ModalLauncher';
import './Slide.css';

const buttonLightUp = {
  backgroundColor: '#07BAC2',
  color: '#000',
};

export default class Slide extends Component {

  handleMouseEnter = () => {
    console.log('entered slide')
    this.props.updateHover(true);
  }

  handleMouseLeave = () => {
    this.props.updateHover(false);
  }

  render() {
    const { 
      buttonHover, 
      cardHover,
      currentProject } = this.props;

    let textStyles = {}, 
        buttonStyles = {},
        cardStyles = {}

    if (cardHover) {
      textStyles = { opacity: 1, top: '24%' };
      buttonStyles = { opacity: 1, bottom: '24%' };
      cardStyles = { opacity: 0 }
    } else {
      textStyles = { opacity: 0 }
      buttonStyles = { opacity: 0 }
    }

    if (buttonHover) {
      buttonStyles = { ...buttonStyles, ...buttonLightUp };
    }
    
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