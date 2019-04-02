import React, {Component} from 'react';
import {View} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';
const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key = "auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial/>
                </Scene>
                <Scene key = "main"  >
                    <Scene 
                    rightTitle="Add"
                    onRight={()=> Actions.employeeCreate()}
                    key="employeeList" 
                    component={EmployeeList} 
                    title="Employee List" 
                    
                    />
                    <Scene key="employeeCreate" component={EmployeeCreate} title="New Employee"/>
                </Scene>
                
            </Scene>
        </Router>
    );
};

export default RouterComponent;