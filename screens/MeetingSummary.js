import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CoolButton from "../components/CoolButton";
import {connect} from 'react-redux';
import {resetMeeting} from "../model/actions/actions";

class MeetingSummary extends Component {

    static navigationOptions = {
        title: 'Meeting summary',
    };

    render() {
        return (
            <View style={[styles.container]}>
                <Text style={[styles.summary, styles.gap]}>Total cost of this meeting </Text>
                <Text style={[styles.costText, styles.gap]}>{this.props.meetingCost} €</Text>
                <CoolButton
                    label={'Reset'}
                    action={ () => {
                        this.props.dispatchResetMeeting();
                        this.props.navigation.popToTop();
                        }
                    }/>
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
    summary: {
        fontSize: 22,
    },
    gap: {
        paddingBottom: 10,
    },
    costText:  {
        fontSize: 50,
        color: '#2f95dc'
    },
});

const mapStateToProps = (state) => {
    return ({ meetingCost: state.meetingCost });
};

const mapDispatchToProps = {
    dispatchResetMeeting: () => resetMeeting()
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetingSummary);