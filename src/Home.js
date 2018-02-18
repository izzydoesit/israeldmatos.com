import React, { Component } from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import './Projects.css';
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <ScrollableAnchor id={'home'}>
          <div className="home">
            <Hero />   
          </div>
        </ScrollableAnchor>
      </section>
    )
  }
}
