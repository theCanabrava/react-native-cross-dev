import React from 'react';
import { connect } from 'react-redux';

import { getPost } from '../actions';
import ScreenContainer from './components/ScreenContainer';
import Button from './components/Button';

const GetScreen = ({getPost}) =>
(
    <ScreenContainer>
        <Button onPress={getPost}>
            GET POST
        </Button>
    </ScreenContainer>
)

const actions = { getPost };
export default connect(undefined, actions)(GetScreen);