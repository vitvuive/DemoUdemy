import React from 'react';
import { View, Text, Picker, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from './action';
import { Input } from '../auth/Input';
class EmployeeForm extends React.Component {
 buttonPress() {
  const { name, phone, shift } = this.props;
  this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
 }
 render() {
  const { containerShiftStyle, container, pickerTextStyle } = styles;
  return (
   <View style={container}>
    <Input
     label="Name:"
     placeholder="Your name.."
     value={this.props.name}
     onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
    />

    <Input
     label="Phone:"
     placeholder="Your telephone.."
     value={this.props.phone}
     onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
    />

    <View style={containerShiftStyle}>
     <Text style={pickerTextStyle}>Shift:</Text>
     <Picker
      style={{ flex: 2, fontSize: 18 }}
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
    </View>
   </View>
  );
 }
}

const styles = {
 textInputStyle: {
  height: 40,
  flex: 1,
  borderColor: 'gray',
  borderWidth: 1,
  borderRadius: 20
 },
 pickerTextStyle: {
  fontSize: 18,
  paddingLeft: 15,
  flex: 1,
  color: '#A4A4A4'
 },
 containerShiftStyle: {
  height: 55,
  backgroundColor: '#F4F4F4',
  borderBottomWidth: 1,
  flexDirection: 'row',
  margin: 10,
  alignItems: 'center',
  borderColor: '#A6A6A6'
 },
 container: {
  backgroundColor: '#FFF',
  marginTop: 20
 }
};

const mapStateToProps = state => {
 const { name, phone, shift } = state.employeeForm;

 return { name, phone, shift };
};

export default connect(
 mapStateToProps,
 { employeeUpdate }
)(EmployeeForm);
