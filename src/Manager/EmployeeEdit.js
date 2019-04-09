import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from './action';
import _ from 'lodash';
import Communications from 'react-native-communications';
import Button from '../components/Button';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import EmployeeForm from './EmployeeForm';
import Confirm from './Confirm';
class EmployeeEdit extends Component {
 state = { showModal: false };
 componentWillMount() {
  _.each(this.props.employee, (value, prop) => {
   this.props.employeeUpdate({ prop, value });
  });
 }
 onButtonPress() {
  const { name, phone, shift } = this.props;

  this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
 }
 onTextPress() {
  const { phone, shift } = this.props;

  Communications.text(phone, `Your upcoming shift is on ${shift}`);
 }
 onAccept() {
  const { uid } = this.props.employee;
  this.props.employeeDelete({ uid });
 }
 onDecline() {
  this.setState({ showModal: false });
 }
 render() {
  const { container, containerForm } = styles;
  return (
   <LinearGradient colors={['#FFFFFF', '#5056ff']} style={container}>
    <View style={containerForm}>
     <EmployeeForm />
     <Button onPress={this.onButtonPress.bind(this)}>Update</Button>
     <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>

     <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
      Delete Employee
     </Button>

     <Confirm
      visible={this.state.showModal}
      onAccept={this.onAccept.bind(this)}
      onDecline={this.onDecline.bind(this)}
     >
      Are you sure you want to delete this ?
     </Confirm>
    </View>
   </LinearGradient>
  );
 }
}

const styles = {
 container: {
  flex: 1,
  // backgroundColor:'#FFF',
  justifyContent: 'center'
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
  paddingBottom: 8
 }
};
const mapStateToProps = state => {
 const { name, phone, shift } = state.employeeForm;
 return { name, phone, shift };
};

export default connect(
 mapStateToProps,
 { employeeUpdate, employeeSave, employeeDelete }
)(EmployeeEdit);
