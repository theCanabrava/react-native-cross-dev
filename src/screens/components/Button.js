import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default ({children, onPress}) =>
(
    <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>
                {children}
            </Text>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create(
    {
        buttonContainer:
        {
            height: 46,
            minWidth: 100,
            backgroundColor: '#dd8888',
            alignItems: 'stretch',
            borderRadius: 10
        },

        button:
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 10
        },

        buttonText:
        {
            color: 'white',
            fontSize: 18
        }
    }
)