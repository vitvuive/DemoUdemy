import React from 'react';
import {View, Text,Picker,TextInput} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate,employeeCreate} from './action';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import Button from '../components/Button';
class EmployeeCreate extends React.Component{
    buttonPress(){
        const {name, phone, shift}= this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }
    render(){
        return(
            <Card>
            <CardSection>
                <TextInput
                placeholder='Your name..'
                style={styles.textInputStyle}
                value={this.props.name}
                onChangeText = {value=> this.props.employeeUpdate({prop:'name', value})}
                />
            </CardSection>
            <CardSection>
                <TextInput
                
                placeholder='Your telephone..'
                style={styles.textInputStyle}
                value= {this.props.phone}
                onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                />
            </CardSection>
            <CardSection style={{ flexDirection: 'column' }}>
            <Text style={styles.pickerTextStyle}>Shift:</Text>
            <Picker
                style={{ flex: 1 }}
                selectedValue={this.props.shift}
                onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
            >
                <Picker.Item label="Monday" value="Monday" />
                <Picker.Item label="Tuesday" value="Tuesday" />
                <Picker.Item label="Wednesday" value="Wednesday" />
                <Picker.Item label="Thursday" value="Thursday" />
                <Picker.Item label="Friday" value="Friday" />
                <Picker.Item label="Saturday" value="Saturday" />
                <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
            </CardSection>
            <CardSection>
                <Button onPress={this.buttonPress.bind(this)}> Save
                </Button>
            </CardSection>
            </Card>
        );
    }
}

const styles = {
    textInputStyle:{
        height: 40, 
        flex:1, 
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius:20
    },
    pickerTextStyle:{
        fontSize:16,
        paddingLeft:10,
        color:'black'
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