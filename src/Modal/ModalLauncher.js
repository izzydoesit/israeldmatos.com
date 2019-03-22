import React, { Component } from 'react';
import Modal from './Modal';
import './ModalLauncher.css';
import { toggleModal } from '../actions/modal-actions';

export default class ModalLauncher extends Component {

  handleClick = () => {
    console.log('clicked', this.props.buttonStyles)
    this.props.toggleModal(true);
  }

  handleButtonEnter = () => {
    this.props.updateButton(true);
  }
 
   handleButtonLeave = () => {
     this.props.updateButton(false);
   }

  render() {
    const { buttonStyles, modalIsOpen } = this.props;
   
    return (
        <button
          type="button"
          className="modalButton card-button"
          style={buttonStyles}
          onClick={this.handleClick}
          onMouseEnter={this.handleButtonEnter}
          onMouseLeave={this.handleButtonLeave}
        >
          LEARN MORE
        </button>
    );
  }
}