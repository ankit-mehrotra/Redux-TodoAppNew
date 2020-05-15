
import { combineReducers } from 'redux';
import  TodoReducer from "./TodoReducer";
import  visibilityFilter  from './visibilityFilter'

export default combineReducers({
    todos:TodoReducer,
    visibilityFilter :visibilityFilter
});