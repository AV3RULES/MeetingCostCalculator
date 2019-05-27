import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CoolButton from "../components/CoolButton";

class MeetingSummary extends Component {

    constructor(props){
        super(props);

        this.state = {
            totalCost: this.props.navigation.getParam('totalCost', 0),
        }
    }

    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.startButton]}>
                    <CoolButton
                        label={'Reset'}
                        action={ () => this.props.navigation.navigate('Attendees') }/>
                </View>
                <View>
                    <Text style={[styles.costText]}>{this.state.totalCost.toFixed(2)}/€</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    startButton: {
        flex: 1,
        maxHeight: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    costText:  {
        fontSize: 50,
        color: '#2f95dc'
    },
});

export default MeetingSummary;