import { UPDATE_MODAL, TOGGLE_MODAL, UPDATE_MODAL_SLIDE } from '../constants';

export const updateModal = (currentProject) => ({
  type: UPDATE_MODAL,
  currentProject
});

export const updateModalSlide = (nextIndex) => ({
  type: UPDATE_MODAL_SLIDE, 
  activeModalIndex: nextIndex
});

export const toggleModal = (modalState) => ({
  type: TOGGLE_MODAL,
  modalIsOpen: modalState,
});