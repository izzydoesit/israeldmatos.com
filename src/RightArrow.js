import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'
import './RightArrow.css';

export default class RightArrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
  }

  mouseOver() {
    this.setState({hover: true});
  }

  mouseOut() {
    this.setState({hover: false});
  }

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