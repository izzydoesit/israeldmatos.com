import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

export default class RotatingArrow extends Component {

  render () {
    return (
      <Motion
        defaultStyle={{ rotate: 0 }}
        style={{ rotate: spring(this.props.rotate) }}
      >
      {(style) => (
        <span
          style={{
            transform: `rotate( ${style.rotate}deg )`
          }}
          className="arrow-icon fa fa-arrow-right"

        ></span>
      )}

      </Motion>
    )
  }
}