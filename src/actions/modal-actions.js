import { UPDATE_MODAL, TOGGLE_MODAL, UPDATE_ACTIVE_INDEX, UPDATE_MODAL_SLIDE } from '../constants';

export const updateActiveIndex = (index) => {
  return {
    type: UPDATE_ACTIVE_INDEX,
    index
  }
}

export const updateModal = (index) => ({
  type: UPDATE_MODAL,
  index
});

export const updateModalSlide = (nextIndex) => ({
  type: UPDATE_MODAL_SLIDE,
  activeModalIndex: nextIndex
});

export const toggleModal = (modalState) => ({
  type: TOGGLE_MODAL,
  modalIsOpen: modalState,
});