import {combineReducers} from 'redux';
import LibraryReducers from './LibraryReducer';
export default combineReducers({
    libraries: LibraryReducers
});