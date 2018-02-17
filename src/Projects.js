import React, { Component } from 'react';
import Slider from './Slider';
import './Projects.css';
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';

export default class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <ScrollableAnchor id={'projects'}>
          <div className="container flex">
            <div className="header animated slide-in-right">Projects</div>
            <div className="header-bar animated slide-in-right"></div>
            <Slider />
          </div>
        </ScrollableAnchor>
      </section>
    )
  }
}
