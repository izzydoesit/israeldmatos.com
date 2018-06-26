import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

export default class RotatingArrow extends Component {

  render () {
    return (
      <Motion
        defaultStyle={{ rotate: 0 }}
        style={{ rotate: spring(this.props.rotate), speed: "transform .3s" }}
      >
      {(style) => (
        <span
          style={{
            transform: `rotate( ${style.rotate}deg )`,
            transition: `${style.speed}`
          }}
          className="arrow-icon fa fa-arrow-right"

        ></span>
      )}

      </Motion>
    )
  }
}