import { combineReducers } from 'redux';
import cardDetailsReducer from './cardDetails';
import filterDetailsReducer from './filterDetails';

const rootReducer = combineReducers({
    cardDetailsReducer,
    filterDetailsReducer
});

export default rootReducer;