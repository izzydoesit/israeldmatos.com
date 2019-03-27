import React, { Component } from 'react';
import './Blog.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';

export default class Blog extends Component {

  render() {
    return (
      <section>
        <ScrollableAnchor id={'blog'}>
          <div className="container flex">
            <ScrollAnimation>
              <div className="header animated slide-in-left">Blog</div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="header-bar animated slide-in-left"></div>
            </ScrollAnimation>
            <div>
              <div className="animated fade-in fade">
                <div className="thumb"></div>
                <div className="label bold"></div>
                <div className="bar"></div>
                <div className="text"></div>
              </div>                  
            </div>
            <div>
              <div className="animated fade-in fade">
                <div className="thumb"></div>
                <div className="label bold"></div>
                <div className="bar"></div>
                <div className="text"></div>
              </div>          
            </div>
            <div>
              <div className="animated fade-in fade">
                <div className="thumb"></div>
                <div className="label bold"></div>
                <div className="bar"></div>
                <div className="text"></div>
              </div>          
            </div>
            <div>
              <div className="animated fade-in fade">
                <div className="thumb"></div>
                <div className="label bold"></div>
                <div className="bar"></div>
                <div className="text"></div>
              </div>          
            </div>
          </div>
        </ScrollableAnchor>
      </section>
    )
  }
}
