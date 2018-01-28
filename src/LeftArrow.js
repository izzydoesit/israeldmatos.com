import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'
import './LeftArrow.css';

export default class LeftArrow extends Component {

  render() {
    return (
      <a
        href="#"
        className="slider-arrow-left"
        onClick={this.props.onClick}
      >
        <i className="fa fa-2x fa-angle-left" />
      </a>
    )
  }
}