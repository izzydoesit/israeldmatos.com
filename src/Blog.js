import React, { Component } from 'react';
import './Blog.css';
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';

export default class Blog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollableAnchor id={'blog'}>

      </ScrollableAnchor>
    )
  }
}
