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
    this.callback = this.callback.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.state = {
      name: '',
      email: '',
      message: '',
      showMessage: false
    };
  }

  componentDidMount() {

    this.setState({
      name: 'Ronald McDonald',
      email: 'ronald@mcdonalds.com',
      message: 'hey, looks like we could make beautiful burgers together!'
    })
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

    console.log('SUBMITTED!!!', event);

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

  callback(event) {
    console.log("DONE LOADING!!");
  }

  verifyCallback(response) {
    console.log("VERIFIED. RESPONSE:", response);
    this.onSubmit(response);
  }

  render() {
    const { name, email, message } = this.state;

    return (
      <div className="form-wrap">

        <ScrollAnimation animateOnce={true} animateIn="tada" delay={1200}>

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

                {/*<script src="https://www.google.com/recaptcha/api.js"></script>
                <div className="g-recaptcha" data-sitekey={localHostSiteKey}></div>*/}
              {/*<Recaptcha
                ref={e => recaptchaInstance = e}
                sitekey={localHostSiteKey}
                size="invisible"
                onloadCallback={this.callback}
                verifyCallback={this.verifyCallback}
              />*/}

              <input type="hidden" name="_subject" value={`[israeldmatos.com] New email from ${this.state.name}!`}/>


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
