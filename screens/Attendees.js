import React, {Component} from 'react';
import {View,  ScrollView, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import CoolButton from '../components/CoolButton';

class Attendees extends Component {

    static navigationOptions = {
        title: 'Attendees',
    };

    constructor() {
        super();

        this.state = {
            attendees: [
                    {
                        name: "Juan",
                        cost: 80
                    },
                    {
                        name: "Pablo",
                        cost: 80
                    },
                    {
                        name: "Miguel",
                        cost: 45
                    },
                    {
                        name: "Avelino",
                        cost: 60
                    },
                    {
                        name: "Martin Fowler",
                        cost: 150
                    },
                ]};
    }

    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.startButton]}>
                    <CoolButton
                        label={'Start Meeting'}
                        action={ () => this.props.navigation.navigate('TimeTracking') }/>
                </View>
                <ScrollView style={[styles.attendeesContainer]}>
                    {
                        this.state.attendees.map(
                            (attendee, index) =>(
                                <View key={index} style={[styles.attendee]}>
                                    <Image
                                        source={require('../assets/images/attendee.png')}
                                        style={{width: 50, height: 50, marginRight: 10}}
                                    />
                                    <View>
                                        <Text style={[styles.name]}>{attendee.name}</Text>
                                        <Text style={[styles.cost]}>{attendee.cost}€/hour</Text>
                                    </View>
                                </View>
                            )
                        )
                    }
                </ScrollView>
                <View style={[styles.form]}>
                    <View style={styles.inputWrapper}>

                    </View>
                    <TouchableOpacity>
                        <View style={styles.containerButton}>
                            <Text style={[styles.textButton]}>+</Text>
                        </View>
                    </TouchableOpacity>
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
    attendeesContainer: {
        flex: 1,
    },
    form: {
        flex: 1,
        maxHeight: 120,
        flexDirection: 'row',
        padding: 10,
    },
    attendee: {
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontSize: 18,
    },
    cost: {
        fontSize: 14,
    },
    inputWrapper:{
        flex: 1,
        backgroundColor: 'orange',
    },
    containerButton: {
        backgroundColor: 'lightblue',
        width: 100,
        height: 100,
        borderRadius: 20,
        borderColor: 'red',
        borderWidth: 1,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
      fontSize: 30,
    },
});

export default Attendees;