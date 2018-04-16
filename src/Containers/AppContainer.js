import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../App/App';
import { toggleModal, updateModal } from '../actions/modal-actions';
import { updateButton, updateHover } from '../actions/card-actions';

const mapStateToProps = ( state ) => {
  return ({ 
    currentProject: state.modal.currentProject,
    projects: state.modal.projects,
    cardHover: state.card.cardHover,
    buttonHover: state.card.buttonHover,
    modalOpen: state.modal.modalOpen,
  });
}

const mapDispatchToProps = (dispatch) => ({
  toggleModal(modalState) {
    dispatch(toggleModal(modalState))
  },
  updateModal(project) {
    dispatch(updateModal(project))
  },
  updateHover(hoverState) {
    dispatch(updateHover(hoverState))
  },
  updateButton(buttonState) {
    dispatch(updateButton(buttonState))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
