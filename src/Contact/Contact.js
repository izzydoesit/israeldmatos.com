import React, { Component } from 'react';
import './Contact.css';
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';
import ScrollAnimation from 'react-animate-on-scroll';
import ContactForm from './ContactForm';

export default class Contact extends Component {

  render() {

    return (
      <section id="contact-section">
        <ScrollableAnchor id={'contact'}>

          <div className="container flex">

            <ScrollAnimation animateIn="bounceInRight" animateOnce={true}>
              <div className="header">Contact</div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="bounceInRight" animateOnce={true} delay={200}>
              <div className="header-bar"></div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="bounceInLeft" animateOnce={true} delay={500}>
              <div className="subtitle">Have a question or want to work together?</div>
            </ScrollAnimation>

            <ContactForm />

          </div>
        </ScrollableAnchor>
      </section>
    )
  }
}
