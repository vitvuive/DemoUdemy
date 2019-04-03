import React, {Component} from 'react';
import {View} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';
import EmployeeForm from './EmployeeForm';
import EmployeeEdit from './EmployeeEdit';
const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key = "auth">
                    <Scene key="login" component={LoginForm} title="Please Login" />
                </Scene>
                <Scene key = "main"  >
                    <Scene 
                    rightTitle="Add"
                    onRight={()=> Actions.employeeCreate()}
                    key="employeeList" 
                    component={EmployeeList} 
                    title="Employee List" 
                    initial
                    />
                    <Scene key="employeeCreate" component={EmployeeCreate} title="New Employee"/>
                    <Scene key="employeeForm" component={EmployeeForm} title="New Employee" />
                    <Scene key="employeeEdit" component={EmployeeEdit} title="Update Employee" />
                </Scene>
                
            </Scene>
        </Router>
    );
};


export default RouterComponent;