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
          <div className="header animated slide-in-left">Blog</div>
          <div className="header-bar animated slide-in-left"></div>

          <a href="">
            <div className="animated fade-in fade">
              <div className="thumb"></div>
              <div className="label bold"></div>
              <div className="bar"></div>
              <div className="text"></div>
            </div>                  
          </a>
          <a href="">
            <div className="animated fade-in fade">
              <div className="thumb"></div>
              <div className="label bold"></div>
              <div className="bar"></div>
              <div className="text"></div>
            </div>          
          </a>
          <a href="">
            <div className="animated fade-in fade">
              <div className="thumb"></div>
              <div className="label bold"></div>
              <div className="bar"></div>
              <div className="text"></div>
            </div>          
          </a>
          <a href="">
            <div className="animated fade-in fade">
              <div className="thumb"></div>
              <div className="label bold"></div>
              <div className="bar"></div>
              <div className="text"></div>
            </div>          
          </a>
      </ScrollableAnchor>
    )
  }
}
