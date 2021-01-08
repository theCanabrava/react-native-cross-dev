import { combineReducers } from 'redux';
import counterStore from './counterStore';
import noteStore from './noteStore';
import postStore from './postStore';

const reducers =
{
    counter: counterStore,
    post: postStore,
    note: noteStore
}

export default combineReducers(reducers);