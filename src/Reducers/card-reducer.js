import initialState from '../Store/initialState';
import { UPDATE_HOVER, UPDATE_BUTTON, TOGGLE_MODAL } from '../constants';

export default function(state = initialState, action) {
  if (action.type === UPDATE_HOVER) {
    return {
      ...state,
      cardHover: action.cardHover
    }
  }

  if (action.type === UPDATE_BUTTON) {
    return {
      ...state,
      buttonHover: action.buttonHover
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