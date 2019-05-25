import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CoolButton = ({label, action}) => (
    <TouchableOpacity onPress={ action }>
        <View style={[styles.startButton]}>
            <Text style={[styles.startText]}>
                {label}
            </Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    startButton: {

        textAlign: 'center',
        backgroundColor: '#2f95dc',
        borderRadius: 10,
    },
    startText: {
        color: 'white',
        fontSize: 30,
        padding: 10,
    },
});

export default CoolButton;