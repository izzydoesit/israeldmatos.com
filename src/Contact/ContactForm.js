 import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import emailjs from 'emailjs-com';
import Message from './Message';
import './ContactForm.css';

const userId = process.env.REACT_APP_EMAIL_JS_USER_ID;
const serviceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
const sitekey = process.env.REACT_APP_RECAPTCHA_SITEKEY

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

    emailjs.init(userId);
    emailjs.send(serviceId, templateId, {
      reply_to: this.state.email,
      from_name: this.state.name,
      message_html: this.state.message
    })
    .then((response) => {
      console.log('SUCCESS. status=%d, text=%s', response.status, response.text);
    }, (err) => {
      console.log('FAILED. err=', err)
    });

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
      showMessage: false,
      name: '',
      email: '',
      message: ''
    });
  }

  render() {
    const { name, email, message } = this.state;

    return (
      <div className="form-wrap">

        <ScrollAnimation animateOnce={true} animateIn="tada" delay={1200}>

          <form className="flex contact-form">

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

              <div className="g-recaptcha"
                data-sitekey={sitekey}
                data-callback="onSubmit"
                data-size="invisible">
              </div>

              <button
                className="contact-btn g-recaptcha"
                type="submit"
                value="Submit"
                onClick={this.onSubmit}
                data-sitekey={sitekey}
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
