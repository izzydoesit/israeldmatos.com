import React, { Component } from 'react';
import axios from 'axios';
import ScrollAnimation from 'react-animate-on-scroll';
import Message from './Message';
import './ContactForm.css';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClose = this.onClose.bind(this);
    this.state = {
      name: '',
      email: '',
      message: '',
      showMessage: false
    };
  }

  onChange(event) {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  onSubmit(event) {
    event.preventDefault();
    
    let messagePayload = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message    
    }
    
    axios.post('/contact', messagePayload)
    .then((response) => {
      console.log('response:', response);
    })
    .catch((error) => {
      console.log('error:', error)
    })

    this.setState({
      showMessage: true,
      name: '',
      email: '',
      message: ''
    });
  }

  onClose(event) {
    this.setState({
      showMessage: false
    });
  }

  render() {
    const { name, email, message } = this.state;

    return (
      <div className="form-wrap">

        <ScrollAnimation 
          animateOnce={true} 
          animateIn="tada" 
          delay={1200}
        >

          <form
            className="flex contact-form"
            id="contactForm"
            onSubmit={this.onSubmit}
          >
            <div className="flex input-wrap">
              <input
                className="flex name-input"
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={this.onChange}
              />
              <input
                className="flex email-input"
                type="text"
                placeholder="Your email"
                name="email"
                value={email}
                onChange={this.onChange}
              />
              <textarea
                className="flex message-input"
                type="text"
                placeholder="Your message..."
                name="message"
                value={message}
                onChange={this.onChange}
              />

              <Message onClose={this.onClose} show={this.state.showMessage}/>

              <button
                className="contact-btn"
                type="submit"
                value="Submit"
              >
                Submit
              </button>
            </div>
          </form>

        </ScrollAnimation>
      </div>
    )
  }
}
