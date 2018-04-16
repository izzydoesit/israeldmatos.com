import React, { Component } from 'react';
import './SliderIndicator.css'

export default class SliderIndicator extends Component {

  handleClick = () => {
    this.props.updateModal(this.props.index);
  }

  render() {
    const { updateModal, index } = this.props;
    return (
      <li>
        <a
          className={
            this.props.index === this.props.activeIndex
            ? "slider-indicator slider-indicator-active"
            : "slider-indicator"
          }
          alt="project slide"
          onClick={this.handleClick}
        />
      </li>
    );
  }
}
