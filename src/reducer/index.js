import { combineReducers } from 'redux';
import counterStore from './counterStore';
import postStore from './postStore';

const reducers =
{
    counter: counterStore,
    post: postStore
}

export default combineReducers(reducers);