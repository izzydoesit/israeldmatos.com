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
      <ScrollableAnchor id={'projects'}>
        <Slider/>
      </ScrollableAnchor>
    )
  }
}
