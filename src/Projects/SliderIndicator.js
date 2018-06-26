import React, { Component } from 'react';
import './SliderIndicator.css'

export default class SliderIndicator extends Component {

  handleClick = () => {
    this.props.updateModal(this.props.project);
  }

  render() {
    const { index } = this.props;
    return (
      <li>
        <a
          className={
            index === this.props.activeIndex
            ? "slider-indicator slider-indicator-active"
            : "slider-indicator"
          }
          alt="project slide"
          onClick={this.handleClick}
        ></a>
      </li>
    );
  }
}
