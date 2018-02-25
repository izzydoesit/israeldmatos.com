import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './BulletCard.css';

export default class BulletCard extends Component {

  render() {
    const Icon = this.props.icon.image
    const label = this.props.icon.label
    const tagLine = this.props.icon.tagLine
    const iconDelay = this.props.icon.delay
    const textDelay = iconDelay + 100

    return (
      <div className="flex bullet-wrap">

        <ScrollAnimation animateIn="flipInY" delay={iconDelay}>
          <div className="hex-wrap">
            <div className="hexagon">
              <Icon size={55} className="hex-icon"/>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={textDelay}>
          <div className="bullet-text">
            <div className="label bold">{label}</div>
            <div className="description">{tagLine}
            </div>
          </div>
        </ScrollAnimation>

      </div>
    )
  }
}
