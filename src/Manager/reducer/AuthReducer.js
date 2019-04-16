import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  CREATE_USER,
  CREATE_USER_FAIL,
  SET_VALUE,
} from '../action/type';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
  succ: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: '',
        email: '',
        password: '',
        loading: false,
      };

    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        email: '',
        password: '',
        succ: 'Create User Success! Login',
      };

    case LOGIN_USER:
      return { ...state, loading: true, error: '' };

    case CREATE_USER:
      return { ...state, loading: true, error: '' };

    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication fail!', loading: false };
    case CREATE_USER_FAIL:
      return {
        ...state,
        error: 'Register fail!!',
        loading: false,
        succ: '',
      };
    case SET_VALUE:
      return {
        email: '',
        password: '',
        user: null,
        error: '',
        loading: false,
        succ: '',
      };
    default:
      return state;
  }
};
