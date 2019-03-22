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
    const { project } = this.props;
    return (
      <div
        className="slide"
      >
        <div className="card">
          <img
            className="slide-pic"
            resizemode="stretch"
            src={project.pics[0]}
            alt='web project'
          />
        </div>

        <div className="flex card-text" >
          <div className="bold title">
            {project.title}
          </div>
          <div className="blurb">{project.blurb}</div>
        </div>

        <button
          className="card-button modalButton"
        >LEARN MORE</button>
      </div>
    )
  }
}

Slide.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  buttonHover: PropTypes.bool.isRequired,
  cardHover: PropTypes.bool.isRequired,
}