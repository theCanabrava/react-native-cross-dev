import React from 'react';
import { View, StyleSheet } from 'react-native';

export default ({children}) =>
(
    <View style={styles.container}>
        {children}
    </View>
)

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'center'
        }
    }
);