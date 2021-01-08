import 'react-native-gesture-handler';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import reducer from './src/reducer';
import MainNavigator from './src/navigation/MainNavigator';

const store = createStore(reducer, applyMiddleware(thunk));

export default () =>
(
    <Provider store={store}>
        <MainNavigator/>
    </Provider>
)