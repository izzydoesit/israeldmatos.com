import React, { Component } from 'react';
import ModalSlide from './ModalSlide';
import './ModalSlider.css';

export default class ModalSlider extends Component {

  render() {
    const { pics } = this.props;

    return(
      <div className="slider-container">
        <div className="prev"></div>
          <ModalSlide />
        }}
        <div className="next"></div>
      </div>
    )
  }
}