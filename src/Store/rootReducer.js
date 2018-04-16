import { combineReducers } from 'redux';
import modal from '../Reducers/modal-reducer';
import card from '../Reducers/card-reducer';

export const rootReducer = combineReducers({
  modal,
  card
});