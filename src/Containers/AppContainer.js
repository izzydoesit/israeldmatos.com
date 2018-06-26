import { connect } from 'react-redux';
import App from '../App/App';
import { toggleModal, updateModal, updateModalSlide } from '../actions/modal-actions';
import { updateButton, updateHover } from '../actions/card-actions';

const mapStateToProps = ( state ) => {
  return ({ 
    currentProject: state.modal.currentProject,
    projects: state.modal.projects,
    cardHover: state.card.cardHover,
    buttonHover: state.card.buttonHover,
    modalIsOpen: state.modal.modalIsOpen,
    activeModalIndex: state.modal.activeModalIndex
  });
}

const mapDispatchToProps = (dispatch) => ({
  toggleModal(modalState) {
    dispatch(toggleModal(modalState))
  },
  updateModal(project) {
    dispatch(updateModal(project))
  },
  updateModalSlide(index) {
    dispatch(updateModalSlide(index))
  },
  updateHover(hoverState) {
    dispatch(updateHover(hoverState))
  },
  updateButton(buttonState) {
    dispatch(updateButton(buttonState))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
