import React, { Component } from 'react';
import Close from 'react-icons/lib/fa/close';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const userId = process.env.REACT_APP_EMAIL_JS_USER_ID;
const serviceId = process.env.REACT_APP_EMAIL_JS_ACCESS_TOKEN;
const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;

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
      opacity: 0
    };
  }

  onChange(event) {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({opacity: 1})
    console.log('SUBMITTED!!!', event.target.value);
    alert('A name was submitted: ' + this.state.value);
    
    emailjs.init(userId);
    /* emailjs.send(serviceId, templateId, {
      reply_to: "",
      from_name: "",
      message_html: ""
    })
    .then ( (res) => {
      console.log('SUCCESS. status=%d, text=%s', response.status, response.text);
    }, (err) => {
      console.log('FAILED. err=', err)
    }); */
  }

  onClose(event) {
    alert('Success message closed!', event.target.value);
    this.setState({opacity: 0})
  }

  render() {
    const { name, email, message } = this.state;

    return (
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
          <div id="success" className="expand" styles={{opacity: this.state.opacity}}>
            <div> 
              "Your message was sent successfully.  Thanks!"
              <span id="close" class="" onClick={this.onClose}>
                <Close size={20} className="close-icon"/>
              </span>
            </div>
          </div>
        </div>

        <button className="contact-btn" type="submit" value="Submit">Submit</button>
      </form>
    )
  }
}
