import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'
import './LeftArrow.css';

export default class LeftArrow extends Component {

  render() {
    return (
      <button
        className="slider-arrow left"
        onClick={this.props.onClick}
      >
        <i className="fa fa-5x fa-angle-left" />
      </button>
    )
  }
}