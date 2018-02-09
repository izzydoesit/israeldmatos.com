import React, { Component } from 'react';
import './Contact.css';
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollableAnchor id={'contact'}>
        <svg></svg>
        <div className="container flex">
          <div className="header animated slide-in-right">Contact</div>
          <div className="header-bar animated slide-in-right"></div>
          <div className="highlihght animated slide-in-right">Have a question or want to work together?</div>

          <form className="animated pop-in">
            <input placeholder="Name" type="text" name="name">
            <input placeholder="Email" type="email" name="email">
            <textarea placeholder="Your message" type="text" name="message"></textarea>

            <div id="success">

            </div>
            <input className="button" type="submit" value="SUBMIT">
          </form>
        </div>
      </ScrollableAnchor>
    )
  }
}
