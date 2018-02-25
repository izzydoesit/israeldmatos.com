import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      transform: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

handleScroll(event) {
    // do something like call `this.setState`
    // access window.scrollY etc
    let scrollTop = event.srcElement.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop/3 - 60);

    this.setState({
      transform: itemTranslate
    });
    console.log('TRAHNSLAATE:', itemTranslate)
  }

  render() {
    return (
      <nav className="flex nav" >
        <div className="link-wrap">
          <a className="page-link active" href="#home">Home</a>
          <a className="page-link" href="#about">About</a>
          <a className="page-link" href="#projects">Projects</a>
          <a className="page-link" href="#blog">Blog</a>
          <a className="page-link" href="#contact">Contact</a>
        </div>
      </nav>
    )
  }
}
