import { EMPLOYEE_FETCH_SUCCESS } from '../action/type';

const INITIAl_STATE = {};

export default (state = INITIAl_STATE, action) => {
  switch (action.type) {
  case EMPLOYEE_FETCH_SUCCESS:
   return action.payload;
    default:
   return state;
 }
};
