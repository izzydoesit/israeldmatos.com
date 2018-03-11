import React, { Component } from 'react';
import axios from 'axios';
import ScrollAnimation from 'react-animate-on-scroll';
import emailjs from 'emailjs-com';
import Message from './Message';
import Recaptcha from 'react-recaptcha';
import './ContactForm.css';

const userId = process.env.REACT_APP_EMAIL_JS_USER_ID;
const serviceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
const sitekey = process.env.REACT_APP_RECAPTCHA_SITEKEY
const localHostSiteKey = process.env.REACT_APP_LOCALHOST_RECAPTCHA_SITEKEY
let recaptchaInstance;

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
    {/*emailjs.init(userId);
    emailjs.send(serviceId, templateId, {
      name: 'Yo',
      email: 'my email',
      message: "hi"
    }).then((response) => {
      console.log('SUCCESS. status=%d, text=%s', response.status, response.text);
    }, (err) => {
      console.log('FAILED. err=', err)
    });*/}
  }

  validateEmail(value) {
     // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }

  onChange(event) {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  executeCaptcha() {
  }

  onSubmit(event) {
    event.preventDefault();

    let messagePayload = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }

    axios({
      url: '//formspree.io/israeldmatos@gmail.com',
      method: 'post',
      data: messagePayload
    })
    .then((response) => {
      console.log('FORMSPREE RESPONSE:', response);
    })
    .catch((error) => {
      console.log('ERROR:', error)
    })

    console.log('response from ONSUBMIT:', event)
    let formParams = {
      email: this.state.email,
      name: this.state.name,
      message: this.state.message,

    }
    emailjs.init(userId);
    {/*emailjs.send(serviceId, templateId, formParams)
    .then((response) => {
      console.log('SUCCESS. status=%d, text=%s', response.status, response.text);
    }, (err) => {
      console.log('FAILED. err=', err)
    });*/}

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
            action="https://formspree.io/israeldmatos@gmail.com"
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
                data-sitekey={localHostSiteKey}
                type="submit"
                value="Submit"
                onClick={this.onSubmit}
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
