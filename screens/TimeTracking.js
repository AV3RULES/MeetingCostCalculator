import React, {Component} from 'react';
import {StyleSheet, View} from "react-native";
import CoolButton from "../components/CoolButton";

class TimeTracking extends Component {

    static navigationOptions = {
        title: 'Time Tracking',
    };

    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.startButton]}>
                    <CoolButton
                        label={'Stop Meeting'}
                        action={ () => this.props.navigation.navigate('MeetingSummary') }/>
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


export default TimeTracking;