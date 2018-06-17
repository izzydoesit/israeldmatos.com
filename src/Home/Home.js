import React, { Component } from 'react';
import {DepthOfFieldSnowfall} from 'react-snowflakes';
import RotatingArrow from './RotatingArrow';
import './Home.css';
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotate: 0
    }
  }

  enter() {
    this.setState({rotate: 90});
  }

  leave() {
    this.setState({rotate: 0});
  }

  render() {

    return (

      <section id="home" className="home">
        <ScrollableAnchor id={'landing'}>

            <div id="storm" className="canvas">

              <DepthOfFieldSnowfall count={80} style={{
                // Position must be relative or absolute,
                // because snowflakes are positioned absolutely.
                position: 'absolute',
                width: '100%',
                height: '100%'
              }}/>

            <div className="home-content">

              <div className="home-text-wrap">
                <div className="greeting">Hello, I'm<span className="name">Israel D. Matos</span>.</div>
                <div className="title">I'm a full-stack web developer.</div>
              </div>

              <a
                className="page-link-btn"
                href="#about"
                role="button"
                onMouseOver={this.enter.bind(this)}
                onMouseLeave={this.leave.bind(this)}
              >
                <div className="btn-content">

                  <span className="btn-text">
                    See my work
                  </span>

                  <RotatingArrow rotate={this.state.rotate}/>
                </div>
              </a>
            </div>
          </div>
        </ScrollableAnchor>
      </section>
    )
  }
}
