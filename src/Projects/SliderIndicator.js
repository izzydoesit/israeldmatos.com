import React, { Component } from 'react';
import './SliderIndicator.css'

export default class SliderIndicator extends Component {

  render() {
    return (
      <li>
        <a
          className={
            this.props.index === this.props.activeIndex
            ? "slider-indicator slider-indicator-active"
            : "slider-indicator"
          }
          alt="project slide"
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}
