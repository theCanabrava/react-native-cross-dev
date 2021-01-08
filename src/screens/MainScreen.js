import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import ScreenContainer from './components/ScreenContainer';
import Button from './components/Button';

const MainScreen = ({count, title, navigation}) =>
(
    <ScreenContainer>
        <Text>
            Current count is: {count}
        </Text>
        <Text>
            Current title is: {title}
        </Text>
        <Button onPress={() => navigation.navigate('Add')}>
            GO TO ADDER
        </Button>
        <Button onPress={() => navigation.navigate('Post')}>
            GO TO GETTER
        </Button>
    </ScreenContainer>
)

const mapStateToProps = ({counter, post}) => ({count: counter.count, title: post.title});
export default connect(mapStateToProps)(MainScreen);