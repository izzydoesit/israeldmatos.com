import React, { Component } from 'react';
import './Contact.css';
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';
import ContactForm from './ContactForm';

export default class Contact extends Component {

  render() {
    return (
      <section>
        <ScrollableAnchor id={'contact'}>
      
          <div className="container flex">
            <div className="header animated slide-in-right">Contact</div>
            <div className="header-bar animated slide-in-right"></div>
            <div className="subtitle animated slide-in-right">Have a question or want to work together?</div>

            <ContactForm />
          </div>
        </ScrollableAnchor>
      </section>
    )
  }
}
