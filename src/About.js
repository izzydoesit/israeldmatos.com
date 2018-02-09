import React, { Component } from 'react';
import './About.css';
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollableAnchor id={'about'}>
        <h1 className="about title">About</h1>
      </ScrollableAnchor>
    )
  }
}
