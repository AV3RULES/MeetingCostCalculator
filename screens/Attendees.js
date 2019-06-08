import React, {Component} from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';
import CoolButton from '../components/CoolButton';
import {connect} from 'react-redux';
import {createAddAttendeeAction} from "../model/actions/actions";


class Attendees extends Component {

    static navigationOptions = {
        title: 'Attendees',
    };

    constructor() {
        super();
        this.state = { name: '', cost: ''};
    }

    addAttendee(name, cost) {
        if(name && cost){
            this.props.dispatchAddAttendee(name, cost);
            this.setState({name: '', cost: ''});
        }
    }

    render() {

        const {attendees} = this.props;

        return (
            <View style={[styles.container]}>
                <View style={[styles.startButton]}>
                    <CoolButton
                        label={'Start Meeting'}
                        action={ () => {this.props.navigation.navigate('TimeTracking')
                        }}
                    />
                </View>
                <ScrollView style={[styles.attendeesContainer]}>
                    {
                        attendees.map(
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
                <AttendantForm
                    name={this.state.name}
                    onNameChange={name => this.setState({name})}
                    cost={this.state.cost}
                    onCostChange={ cost => this.setState({cost})}
                    addAttendee={() => this.addAttendee(this.state.name, this.state.cost)}
                />
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
    },
    inputText: {
        height: 45,
        padding: 10,
        backgroundColor: '#ededed',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 20,
        marginBottom: 5,
    },
    containerButton: {
        backgroundColor: '#ededed',
        width: 100,
        height: 100,
        borderRadius: 20,
        borderColor: '#ddd',
        borderWidth: 1,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton: {
        fontSize: 28,
        lineHeight: 28,
    },
});

const mapStateToProps = (state) => {
    return ({ attendees: state.attendees });
};

const mapDispatchToProps = {
    dispatchAddAttendee: (name, cost) => createAddAttendeeAction(name, cost)
};

const AttendantForm = ({name, onNameChange, cost, onCostChange, addAttendee}) => (
    <View style={[styles.form]}>
        <View style={styles.inputWrapper}>
            <TextInput
                placeholder={"Name of the Atendee"}
                style={[styles.inputText]}
                value={ name }
                onChangeText={onNameChange}/>
            <TextInput
                value={cost}
                placeholder={"Cost per hour"}
                style={[styles.inputText]}
                keyboardType = 'number-pad'
                onChangeText={onCostChange}/>
        </View>
        <TouchableOpacity onPress={addAttendee}>
            <View style={styles.containerButton}>
                <Text style={[styles.addButton]}>+</Text>
            </View>
        </TouchableOpacity>
    </View>
);

export default connect(mapStateToProps, mapDispatchToProps)(Attendees);