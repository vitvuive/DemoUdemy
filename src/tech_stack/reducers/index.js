import { combineReducers } from 'redux';
import LibraryReducers from './LibraryReducer';
import SectionReducer from './SectionReducer';

export default combineReducers({
    libraries: LibraryReducers,
    selectedLibraryId: SectionReducer,
});
