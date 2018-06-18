import initialState from '../Store/initialState';
import { UPDATE_MODAL, TOGGLE_MODAL, UPDATE_MODAL_SLIDE } from '../constants';

export default function(state = initialState, action) {
  if (action.type === UPDATE_MODAL) {
    return { 
      ...state,
      currentProject: action.currentProject || state.currentProject,
    }
  }

  if (action.type === UPDATE_MODAL_SLIDE) {
    return {
      ...state,
      activeModalIndex: action.activeModalIndex 
    }
  }

  if (action.type === TOGGLE_MODAL) {
    return { 
      ...state, 
      modalIsOpen: action.modalIsOpen, 
    }
  }
  return state;
} 