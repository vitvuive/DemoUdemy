import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../action';
import { Button } from '../commons';
import EmployeeForm from './EmployeeForm';
class EmployeeCreate extends React.Component {
    buttonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }
    render() {
        const { container, containerForm } = styles;
        return (
            <LinearGradient colors={['#FFFFFF', '#5056ff']} style={container}>
                <View style={containerForm}>
                    <EmployeeForm {...this.props} />
                    <Button onPress={this.buttonPress.bind(this)}> Save</Button>
                </View>
            </LinearGradient>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
    },
    containerForm: {
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: 'white',
        marginLeft: 24,
        marginRight: 24,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
        paddingBottom: 8,
    },
};

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return {
        name,
        phone,
        shift,
    };
};

export default connect(
    mapStateToProps,
    { employeeUpdate, employeeCreate }
)(EmployeeCreate);
