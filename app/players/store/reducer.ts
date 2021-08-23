import { combineReducers } from 'redux';
import { reducer as form } from './form/reducer';

const reducer = combineReducers({
  form,
});

export { reducer };
