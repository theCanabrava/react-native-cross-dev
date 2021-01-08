import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TextInput, StyleSheet } from 'react-native';

import { write } from '../actions';
import ScreenContainer from './components/ScreenContainer';
import Button from './components/Button';

const NoteScreen = ({write}) =>
{
    const [value, setValue] = useState('');

    const screen =
    (
        <ScreenContainer>
            <TextInput
                value={value}
                onChangeText={(v) => setValue(v)}
                style={styles.field}
            />
            <Button onPress={write.bind(undefined, value)}>
                SAVE NOTE
            </Button>
        </ScreenContainer>
    )

    return screen;
}

const styles = StyleSheet.create(
    {
        field:
        {
            borderRadius: 4,
            borderWidth: 1,
            paddingHorizontal: 8,
            paddingVertical: 4,
            alignSelf: 'stretch',
            margin: 16
        }
    }
)

const actions = { write };
export default connect(undefined, actions)(NoteScreen);