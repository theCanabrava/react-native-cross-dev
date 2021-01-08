import { combineReducers } from 'redux';
import counterStore from './counterStore';

export default combineReducers({counter: counterStore});