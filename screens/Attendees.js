import React, {Component} from 'react';
import {View,  ScrollView, StyleSheet} from 'react-native';
import CoolButton from '../components/CoolButton';

class Attendees extends Component {

    static navigationOptions = {
        title: 'Attendees',
    };

    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.startButton]}>
                    <CoolButton
                        label={'Start Meeting'}
                        action={ () => this.props.navigation.navigate('TimeTracking') }/>
                </View>
                <ScrollView style={[styles.attendeesContainer]}></ScrollView>
                <View style={[styles.form]}></View>
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
    attendeesContainer: {
        flex: 1,
        backgroundColor: 'paleturquoise'
    },
    form: {
        flex: 1,
        maxHeight: 120,
        backgroundColor: '#2f95dc'
    },
});

export default Attendees;