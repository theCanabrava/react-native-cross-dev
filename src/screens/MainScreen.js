import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import ScreenContainer from './components/ScreenContainer';
import Button from './components/Button';
import { addCounter } from '../actions';

const MainScreen = ({count, addCounter}) =>
(
    <ScreenContainer>
        <Text>
            Current count is: {count}
        </Text>
        <Button onPress={() => addCounter()}>
            ADD 1
        </Button>
    </ScreenContainer>
)

const mapStateToProps = ({counter}) => ({count: counter.count});
const actions = { addCounter };
export default connect(mapStateToProps,actions)(MainScreen);