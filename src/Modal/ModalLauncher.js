import React, { Component } from 'react';
import Modal from './Modal';
import './ModalLauncher.css';

export default class ModalLauncher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }
  
  render() {
    const { showModal } = this.state;

    return (
      <div>
        <button
          type="button"
          className="modalButton"
          onClick={() => this.handleToggleModal()}
        >
          LEARN MORE
        </button>

        {showModal &&
          <Modal onCloseRequest={() => this.handleToggleModal()}>
            <img src="https://placeimg.com/900/650/nature" alt="Nature" />
          </Modal>}
      </div>
    );
  }
}