import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ModalSlide.css';

export default class ModalSlide extends Component {


  render() {
    const { activeIndex, projects, activeModalIndex } = this.props;

    return (
      <div
        className="carousel-slot"
      >
        <img
          resizemode="stretch"
          className="slide-pic"
          src={ projects[activeIndex].pics[activeModalIndex] }
          alt="project pic"
        />
      </div>
    )
  }
}

ModalSlide.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  activeModalIndex: PropTypes.number.isRequired,
}