import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transform: 0,
      windowWidth: window.innerWidth,
      showMobileNav: false,
      activeSection: 1
    };
  }

  handleResize = () => {
    this.setState({windowWidth: window.innerWidth});
  }
  
  componentDidMount = () => {
    window.addEventListener('resize', this.handleResize);
    // window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
    // window.removeEventListener('scroll', this.handleScroll);
  } 

  // handleScroll = (event) => {
  //   // do something like call `this.setState`
  //   // access window.scrollY etc
  //   let scrollTop = event.srcElement.body.scrollTop,
  //       itemTranslate = Math.min(0, scrollTop/3 - 60);

  //   this.setState({
  //     transform: itemTranslate
  //   });
  // }

  navigationLinks = () => {
    return [
      <ul className="nav-links" onClick={this.handleNavClick}>
        <li key={1} className="menu-item">
          <a 
          className="page-link"
          href="#landing">Home</a>
        </li>
        <li key={2} className="menu-item">
          <a 
          className="page-link"
          href="#about">About</a>
        </li>
        <li key={3} className="menu-item">
          <a 
          className="page-link"
          href="#projects">Projects</a>
        </li>
        {/*<key={5} li className="menu-item">{<a className="page-link" href="#blog" >Blog</a>}</li>*/}
        <li key={4} className="menu-item">
          <a 
          className="page-link"
          href="#contact">Contact</a>
        </li>
    </ul>
    ]
  }

  renderMobileNav = () => {
    if(this.state.showMobileNav) {
      return this.navigationLinks();
    }
  }
  
  handleNavClick = () => {
    if(!this.state.showMobileNav) {
      this.setState({showMobileNav: true});
    } else {
      this.setState({showMobileNav: false});
    }
  }

  renderNavigation = () => {
    if(this.state.windowWidth <= 900) {
      return [
        <div className="mobile-nav">
          <button onClick={this.handleNavClick}><i className="fa fa-bars fa-2x hamburger"></i></button>
          {this.renderMobileNav()}
        </div>
      ];
    } else {
      return [
        <div key={7} className="desk-nav">
          {this.navigationLinks()}
        </div>
      ]; 
    }
  }

  render() {
    return (
      <nav className="flex nav-container" >
        {this.renderNavigation()}
      </nav>
    )
  }
}
