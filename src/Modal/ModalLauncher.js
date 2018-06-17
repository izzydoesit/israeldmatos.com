import React, { Component } from 'react';
import Modal from './Modal';
import './ModalLauncher.css';
import { toggleModal } from '../actions/modal-actions';

export default class ModalLauncher extends Component {

  handleClick = () => {
    this.props.toggleModal(true);
  }


  render() {
    const { modalIsOpen, buttonEnter, buttonLeave } = this.props;
    console.log('launcher modal open', this.props.modalIsOpen)
    return (
      <div>
        <button
          type="button"
          className="modalButton"
          style={this.props.buttonStyles}
          onClick={this.handleClick}
          onMouseEnter={buttonEnter}
          onMouseLeave={buttonLeave}
        >
          LEARN MORE
        </button>

        {modalIsOpen &&
          <Modal onCloseRequest={() => this.onCloseRequest()} {...this.props}>
            <img src="https://placeimg.com/900/650/nature" alt="Nature" />
          </Modal>
        }
      </div>
    );
  }
}