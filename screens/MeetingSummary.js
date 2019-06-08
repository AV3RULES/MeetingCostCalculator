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
                <Text style={[styles.costText]}>{this.state.totalCost.toFixed(2)} €</Text>
                <CoolButton
                    label={'Reset'}
                    action={ () => this.props.navigation.navigate('Attendees') }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    costText:  {
        fontSize: 50,
        color: '#2f95dc'
    },
});

export default MeetingSummary;