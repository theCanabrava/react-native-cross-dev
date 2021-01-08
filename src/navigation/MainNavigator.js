import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen';
import AddScreen from '../screens/AddScreen';
import GetScreen from '../screens/GetScreen';
import NoteScreen from '../screens/NoteScreen';

const Stack = createStackNavigator();

export default () =>
(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={MainScreen}/>
            <Stack.Screen name='Add' component={AddScreen}/>
            <Stack.Screen name='Post' component={GetScreen}/>
            <Stack.Screen name='Note' component={NoteScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
)