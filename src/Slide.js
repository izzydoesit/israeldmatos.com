import React, { Component } from 'react';
import './Slide.css';

export default class Slide extends Component {

  render() {
    return (
      <li 
        className={
          this.props.index === this.props.activeIndex
          ? "slide slide-active"
          : "slide slide-hide"
        }
        key={this.props.index}
      >
        <img 
          className="slide-pic" 
          src={this.props.slide}
          alt='web project'
        />
      </li>
    )
  }
}