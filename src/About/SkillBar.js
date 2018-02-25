import React, { Component } from 'react';
import './SkillBar.css';

export default class SkillBar extends Component {

  render() {

    return(
      <div className="bar flex">
        <div className="progress" style={{ width: this.props.width }}>
          <div className="bar fill">
            <div className="tag bold flex">{this.props.skill}</div>
          </div>
        </div>
        <span>{this.props.rating}</span>
      </div>
    )
  }
}
