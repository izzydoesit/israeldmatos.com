import React, { Component } from 'react';
import ModalLauncher from '../Modal/ModalLauncher';
import './Slide.css';

const cardHover = {
  opacity: 1
};

const buttonLightUp = {
  backgroundColor: '#E5B495',
  color: '#FFF',
};

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.handleMouseCardHover = this.handleMouseCardHover.bind(this);
    this.handleMouseButtonHover = this.handleMouseButtonHover.bind(this);
    this.state = {
      cardHover: false,
      buttonHover: false,
    }
  }

  handleMouseCardHover() {
    this.setState(this.toggleCardHoverState)
  }

  handleMouseButtonHover() {
    this.setState(this.toggleButtonHoverState)
  }

  toggleCardHoverState() {
    return {
      cardHover: !this.state.cardHover
    };
  }

  toggleButtonHoverState() {
    return {
      buttonHover: !this.state.buttonHover
    };
  }

  render() {
    let textStyles = {}
    let buttonStyles = {}
    let cardStyles = { opacity: 1 }
    if (this.state.cardHover) {
      textStyles = {...cardHover, top: '24%' };
      buttonStyles = {...cardHover, bottom: '24%' };
      cardStyles = { opacity: 0 }
    }

    if (this.state.buttonHover) {
      buttonStyles = { ...buttonStyles, buttonLightUp };
    }

    return (
      <li
        className={
          this.props.index === this.props.activeIndex
          ? "slide slide-active"
          : "slide slide-hide"
        }
        key={this.props.index}
        onMouseEnter={this.handleMouseCardHover}
        onMouseLeave={this.handleMouseCardHover}
      >
        <div className="card" style={cardStyles}>
          <img
            resizemode="stretch"
            className="slide-pic"
            src={this.props.project.src}
            alt='web project'
          />
        </div>

        <div className="flex card-text" style={textStyles}>
          <div className="bold title">
            {this.props.project.title}
          </div>
          <div className="blurb">{this.props.project.blurb}</div>
        </div>

        <button
          className="flex card-button"
          style={buttonStyles}
          onClick={this.props.openModal}
          onMouseEnter={this.handleMouseButtonHover}
          onMouseLeave={this.handleMouseButtonHover}
        >
        LEARN MORE
        </button>
      </li>
    )
  }
}
