import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ModalSlide.css';

export default class ModalSlide extends Component {

  
  render() {
    const { currentProject, activeModalIndex } = this.props;

    return (
      <div 
        className="carousel-slot" 
      >
        <img
          resizemode="stretch"
          className="slide-pic"
          src={ currentProject.pics[activeModalIndex] }
          alt="project pic"
        />
      </div>
    )
  }
}

ModalSlide.propTypes = {
  currentProject: PropTypes.object.isRequired,
  activeModalIndex: PropTypes.number.isRequired,
}