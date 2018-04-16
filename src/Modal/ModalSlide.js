import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ModalSlide.css';

export default class ModalSlide extends Component {

  render() {

    const { activeModalSlide } = this.props;
    return(
      <div
        className="slide slide-active"
        key={activeModalSlide}
      >
      
      </div>
    )
  }
}

ModalSlide.propTypes = {
  activeModalSlide: PropTypes.number.isRequired,
}