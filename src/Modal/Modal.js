import React, { Component } from 'react';
import Modal from 'react-modal';
import ModalSlider from './ModalSlider';
import './Modal.css';

Modal.setAppElement('#root');

export default class MyModal extends Component {

  componentDidMount() {
    // window.addEventListener('keyup', this.handleKeyUp, false);
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    // window.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
  }
  
  handleOutsideClick = (e) => {

    if (!(this.modal)) {
      if (!this.modal.contains(e.target)) {
        this.closeModal();
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
    }
  }
  
  closeModal = (e) => {
    this.props.toggleModal(false);
    this.props.updateModalSlide(0);
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
   // this.subtitle.style.color = '#f00';
  }

  render () {
    const { modalIsOpen, currentProject } = this.props;

    return (
      <div
        className="modal-wrapper"
        ref={node => (this.modal = node)}
      >
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Project Modal"
          className="Modal"
          overlayClassName="Overlay"
        >
          <ModalSlider {...this.props} />

          <div className="info-box">
            <div className="title">{currentProject.title}</div>
            <div className="blurb">{currentProject.blurb}</div>
            <div className="detail">{currentProject.detail}</div>
            <div className="bottom-row">
              <a
                className="modal-link-btn"
                href={currentProject.github}
                target="_blank"
                rel="noopener noreferrer"
              >See Code</a>
            <button 
              className="close-modal-btn" 
              onClick={this.closeModal}
            >
              <i className="fa fa-3x fa-times" />
            </button>
            </div>
          </div>

        </Modal>
      </div>
    );
  }
}
