import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'
import './RightArrow.css';

export default class RightArrow extends Component {

  render() {
    return (
      <button
        className="slider-arrow right"
        onClick={this.props.onClick}
      >
        <i className="fa fa-5x fa-angle-right"/>
      </button>
    )
  }
}