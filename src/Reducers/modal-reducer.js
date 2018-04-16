import initialState from '../Store/initialState';
import { UPDATE_MODAL, TOGGLE_MODAL } from '../constants';

export default function(state = initialState, action) {
  if (action.type === UPDATE_MODAL) {
    return { 
      ...state,
      currentProject: action.currentProject || state.currentProject,
    }
  }

  if (action.type === TOGGLE_MODAL) {
    console.log('toggle modal', action)
    return { 
      ...state, 
      modalOpen: action.modalOpen, 
    }
  }
  return state;
} 