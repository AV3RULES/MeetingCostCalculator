import React, {Component} from 'react';
import {StyleSheet, View, Text} from "react-native";
import CoolButton from "../components/CoolButton";

class TimeTracking extends Component {

    static navigationOptions = {
        title: 'Time Tracking',
    };

    constructor(props) {
        super(props);

        this.state = {
            totalCost: 0.0,
            // costPerHour: this.props.navigation.getParam('totalCostPerHour', 0),
            costPerHour: 250,
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillMount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            totalCost: this.state.totalCost + (this.state.costPerHour/3600),
        })
    }

    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.startButton]}>
                    <CoolButton
                        label={'Stop Meeting'}
                        action={ () => this.props.navigation.navigate('MeetingSummary', {
                            totalCost: this.state.totalCost})}
                    />
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


export default TimeTracking;