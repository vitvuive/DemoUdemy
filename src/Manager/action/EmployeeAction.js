import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE,EMPLOYEE_FETCH_SUCCESS} from './type';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload:{prop, value}
    };
};

export const employeeCreate = ({name, phone, shift}) =>{
    const {currentUser} = firebase.auth();
    return (dispatch) =>{
        firebase.database().ref(`/users/${currentUser.uid}/employee`)
        .push({
            name,phone,shift
        })
        .then(()=>
        dispatch({type: EMPLOYEE_CREATE}),
        Actions.employeeList({type:'reset'}));
    };
};


export const employeeFetch = () => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employee`)
        .on('value', snapshot => {
            dispatch({type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val()});
        });
    };
};