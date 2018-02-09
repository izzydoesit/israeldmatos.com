import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <nav className="flex" >
        <a className="page-link active" href="#home">Home</a>
        <a className="page-link" href="#about">About</a>
        <a className="page-link" href="#projects">Projects</a>
        <a className="page-link" href="#blog">Blog</a>
        <a className="page-link" href="#contact">Contact</a>
      </nav>
    )
  }
}