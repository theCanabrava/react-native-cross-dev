import React from 'react';
import { connect } from 'react-redux';

import { addCounter } from '../actions';
import ScreenContainer from './components/ScreenContainer';
import Button from './components/Button';

const AddScreen = ({addCounter}) =>
(
    <ScreenContainer>
        <Button onPress={addCounter}>
            ADD 1
        </Button>
    </ScreenContainer>
)

const actions = { addCounter };
export default connect(undefined, actions)(AddScreen);