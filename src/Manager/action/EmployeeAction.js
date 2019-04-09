import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS,
} from './type';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value },
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();
    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/employee`)
            .push({
                name,
                phone,
                shift,
            })
            .then(
                () => dispatch({ type: EMPLOYEE_CREATE }),
                Actions.employeeList({ type: 'reset' })
            );
    };
};

export const employeeFetch = () => {
    const { currentUser } = firebase.auth();
    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/employee`)
            .on('value', snapshot => {
                const personData = snapshot.val();
                console.log(personData);
                dispatch({
                    type: EMPLOYEE_FETCH_SUCCESS,
                    payload: snapshot.val(),
                });
            });
    };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/employee/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
                Actions.employeeList({ type: 'reset' });
            });
    };
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
    return () => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/employee/${uid}`)
            .remove()
            .then(() => {
                Actions.employeeList({ type: 'reset' });
            });
    };
};
