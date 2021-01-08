import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

import { load } from '../actions';
import ScreenContainer from './components/ScreenContainer';
import Button from './components/Button';

const MainScreen = ({count, title, note, navigation, load}) =>
{
    useEffect(() => {load()}, []);

    const screen =
    (
        <ScreenContainer>
            <Text>
                Current count is: {count}
            </Text>
            <Text>
                Current title is: {title}
            </Text>
            <Text>
                Current note is: {note}
            </Text>
            <Button onPress={() => navigation.navigate('Add')}>
                GO TO ADDER
            </Button>
            <Button onPress={() => navigation.navigate('Post')}>
                GO TO GETTER
            </Button>
            <Button onPress={() => navigation.navigate('Note')}>
                GO TO NOTE
            </Button>
        </ScreenContainer>
    )    

    return screen;
}

const mapStateToProps = ({counter, post, note}) => 
(
    {
        count: counter.count,
        title: post.title,
        note: note.value
    }
);
const actions = { load };
export default connect(mapStateToProps, actions)(MainScreen);