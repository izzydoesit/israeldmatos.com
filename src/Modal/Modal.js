import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
  

  closeModal = () => {
    this.props.toggleModal(false);
  }
  
  render () {
    const {
      onCloseRequest,
      currentProject,
      children
    } = this.props;

    return (  
      <div className="modalOverlay">
        <div
          className="modal"
          ref={node => (this.modal = node)}
        >
          <div className="modalContent">            
            {children}
          </div>
        </div>

        <button
          type="button"
          className="closeButton"
          onClick={onCloseRequest}
        />
      </div>
    );
  }
}
