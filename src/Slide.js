import React, { Component } from 'react';
import './Slide.css';

const normalText = {
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'red',
  opacity: 0
}

const hoverText = {
  position: 'absolute',
  top: '24%',
  left: 0,
  backgroundColor: 'red',
  opacity: 1
}

const normalButton = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  backgroundColor: 'red',
  opacity: 0,
}

const hoverButton = {
  position: 'absolute',
  bottom: '20%',
  left: 0,
  backgroundColor: 'red',
  opacity: 1
}

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this)
    this.state = { 
      isHovering: false
    }
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState)
  }

  toggleHoverState() {
    return {
      isHovering: !this.state.isHovering 
    };
  }

  render() {
    var textStyles = normalText;
    var buttonStyles = normalButton;
    var cardStyles = { opacity: 1 }
    if (this.state.isHovering) {
      textStyles = hoverText;
      buttonStyles = hoverButton;
      cardStyles = { opacity: 0 }
    }

    return (
      <li 
        className={
          this.props.index === this.props.activeIndex
          ? "slide slide-active"
          : "slide slide-hide"
        }
        key={this.props.index}
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      > 
        <div className="card" style={cardStyles}>
          <img 
            className="slide-pic" 
            src={this.props.slide.src}
            alt='web project'
          />
        </div>
        
        <div className="text" style={textStyles}>
          <div className="bold">
            {this.props.slide.title}
          </div>
          <span class="highlight"></span>
        </div>
        <div className="button" style={buttonStyles}>BUTTON</div>
      </li>
    )
  }
}
