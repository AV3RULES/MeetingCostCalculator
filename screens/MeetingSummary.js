import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import CoolButton from "../components/CoolButton";

class MeetingSummary extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.startButton]}>
                    <CoolButton
                        label={'Reset'}
                        action={ () => this.props.navigation.navigate('Attendees') }/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    startButton: {
        flex: 1,
        maxHeight: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MeetingSummary;