import { combineReducers } from 'redux';
import { templateReducer } from './templateReducer';


const reducers = combineReducers({
    allTemplates: templateReducer,
})

export default reducers;