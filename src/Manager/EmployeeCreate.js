import React from 'react';
import {View, Text,Picker,TextInput} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate,employeeCreate} from './action';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import Button from '../components/Button';
import EmployeeForm from './EmployeeForm';
class EmployeeCreate extends React.Component{
    buttonPress(){
        const {name, phone, shift}= this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }
    render(){
        return(
            <Card>
            <EmployeeForm {...this.props}/>
            <CardSection>
                <Button onPress={this.buttonPress.bind(this)}> Save
                </Button>
            </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) =>
{
    const {name, phone, shift} = state.employeeForm;
    return {
        name, phone, shift
    }
}


export default connect(mapStateToProps,{employeeUpdate,employeeCreate})(EmployeeCreate);