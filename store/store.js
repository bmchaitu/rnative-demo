import {createStore ,Store, combineReducers} from 'redux';
import userReducer from './User/UserReducer';

const rootReducer = combineReducers({
    userSlice : userReducer
})
export const store = createStore(rootReducer);

