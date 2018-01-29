import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'
import './SliderArrow.css';

export default class SliderArrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: this.props.direction
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
      <div className="arrow-container">
        <button
          className={`slider-arrow ${this.state.direction} bounce-${this.state.direction}`}
          onClick={this.props.onClick}
        >
          <i className={`fa fa-5x fa-angle-${this.state.direction}`}/>
        </button>
      </div>
    )
  }
}