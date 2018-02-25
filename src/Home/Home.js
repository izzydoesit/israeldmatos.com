import React, { Component } from 'react';
import Hero from './Hero';
import './Home.css';
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';

export default class Home extends Component {

  render() {

    return (
      <section id="home" className="height-fix">
        <ScrollableAnchor id={'home'}>
          <div className="container home">
            <Hero />
          </div>
        </ScrollableAnchor>
      </section>
    )
  }
}
