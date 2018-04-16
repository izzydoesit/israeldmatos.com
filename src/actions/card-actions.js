import { UPDATE_HOVER, UPDATE_BUTTON } from '../constants';

export const updateHover = (cardHover) => ({
  type: UPDATE_HOVER,
  cardHover
})

export const updateButton = (buttonHover) => ({
  type: UPDATE_BUTTON,
  buttonHover
})

