import React, { Component } from 'react';
import { View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';
import EmployeeForm from './EmployeeForm';
import EmployeeEdit from './EmployeeEdit';
import RegisterForm from './RegisterForm';
const RouterComponent = () => {
 return (
  <Router>
   <Scene key="root" hideNavBar>
    <Scene key="auth">
     <Scene key="login" component={LoginForm} title="Please Login" hideNavBar />
    </Scene>

    <Scene key="register">
     <Scene key="signin" component={RegisterForm} title="Please Login" hideNavBar />
    </Scene>

    <Scene key="main">
     <Scene
      navigationBarStyle={styles.navBar}
      titleStyle={styles.navTitle}
      rightTitle="New"
      rightButtonTextStyle={{ color: 'white' }}
      onRight={() => Actions.employeeCreate()}
      key="employeeList"
      component={EmployeeList}
      title="Employee List"
      initial
     />
     <Scene
      key="employeeCreate"
      component={EmployeeCreate}
      title="New Employee"
      navigationBarStyle={styles.navBar}
      titleStyle={{ color: 'white' }}
      navBarButtonColor="white"
     />
     <Scene key="employeeForm" component={EmployeeForm} title="New Employee" />
     <Scene
      key="employeeEdit"
      component={EmployeeEdit}
      title="Update Employee"
      navigationBarStyle={styles.navBar}
      titleStyle={{ color: 'white' }}
      navBarButtonColor="white"
     />
    </Scene>
   </Scene>
  </Router>
 );
};

const styles = {
 navBar: {
  backgroundColor: '#5056ff' // changing navbar color
 },
 navTitle: {
  color: 'white',
  paddingLeft: 70
 }
};
export default RouterComponent;
