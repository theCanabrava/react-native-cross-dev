import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './src/reducer';
import MainScreen from './src/screens/MainScreen';

const store = createStore(reducer);

export default () =>
(
    <Provider store={store}>
        <MainScreen/>
    </Provider>
)