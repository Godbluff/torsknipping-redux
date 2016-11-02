import {combineReducers} from 'redux';
import numbers from './numbersReducer';
import stats from './statsReducer';

const rootReducer = combineReducers({
  numbers,
  stats
});

export default rootReducer;
