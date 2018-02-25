import React, { Component } from 'react';
import Close from 'react-icons/lib/fa/close';
import './Message.css';

export default class Message extends Component {

  render() {

    return (
      <div id="success" className= {
                this.props.show
                ? "show-message"
                : "hide-message"
              }>
        <div>
          <div className="message">
            Your message was sent successfully.  Thanks!
          </div>
          <span id="close" className="close-x" onClick={this.props.onClose}>
            <Close size={20} className="close-icon"/>
          </span>
        </div>
      </div>
    )
  }
}
