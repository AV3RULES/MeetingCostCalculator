import React, {Component} from 'react';
import {StyleSheet, View, Text} from "react-native";
import CoolButton from "../components/CoolButton";
import {NavigationEvents} from 'react-navigation';

class TimeTracking extends Component {

    static navigationOptions = {
        title: 'Time Tracking',
    };

    constructor(props) {
        super(props);

        this.state = {
            currentCost: 0,
            costPerSecond: 0.134,
            startTime: Date.now(),
        }
    }

    tick() {
        const timeInSeconds = (Date.now() - this.state.startTime)/1000;
        this.setState({
            currentCost: this.state.costPerSecond * timeInSeconds
        }, () => {
            this.timer = setTimeout(() => this.tick(), 1000)
        });
    }

    render() {
        return (
            <View style={[styles.container]}>

                <NavigationEvents
                    onWillFocus={() => {
                        console.log('will focus');
                        this.tick();
                    }}
                    onDidFocus={() => console.log('did focus')}
                    onWillBlur={() => {
                        console.log('will blur');
                        clearTimeout(this.timer);
                    }}
                    onDidBlur={() => console.log('did blur')}
                />

                <Text style={[styles.costText]}>{this.state.currentCost.toFixed(2)} €</Text>
                <CoolButton
                    label={'Stop Meeting'}
                    action={ () => this.props.navigation.navigate('MeetingSummary')}
                />
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
        fontWeight: 'bold',
        padding: 20,
    },
});


export default TimeTracking;