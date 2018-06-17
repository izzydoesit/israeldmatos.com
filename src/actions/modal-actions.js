import { UPDATE_MODAL, TOGGLE_MODAL } from '../constants';

export const updateModal = (currentProject) => ({
  type: UPDATE_MODAL,
  currentProject
});

export const toggleModal = (modalState) => ({
  type: TOGGLE_MODAL,
  modalIsOpen: modalState,
})