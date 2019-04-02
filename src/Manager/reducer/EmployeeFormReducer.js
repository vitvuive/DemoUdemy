import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE} from '../action/type';
const INITIAL_SATE={
    name:'',
    phone:'',
    shift:''

};
export default (state= INITIAL_SATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE:
        return {INITIAL_SATE}
        default:
            return state;
    }
};