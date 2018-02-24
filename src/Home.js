import React, { Component } from 'react';
import Hero from './Hero';
import './Projects.css';
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';

export default class Home extends Component {

  render() {
    return (
      <section>
        <ScrollableAnchor id={'home'}>
          <div className="container home">
            <Hero />   
          </div>
        </ScrollableAnchor>
      </section>
    )
  }
}
