/**
 * Created by kawnayeen on 4/17/17.
 */
import { combineReducers } from 'redux';
import LibraryReducer from './library.reducer';

export default combineReducers({
    libraries: LibraryReducer
});
