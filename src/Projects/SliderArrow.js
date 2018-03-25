import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'
import './SliderArrow.css';

export default class SliderArrow extends Component {
  constructor(props) {
    super(props);
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    this.state = {
      direction: this.props.direction,
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
      <div className="flex arrow-container">
        <button
          className={`slider-btn ${this.state.direction}`}
          onClick={this.props.onClick}
          onMouseEnter={this.mouseOver}
          onMouseLeave={this.mouseOut}
        >
          <i className={`fa fa-caret-${this.state.direction} bounce-${this.state.direction}`}/>
        </button>
      </div>
    )
  }
}
