import { createStore, combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

import rootReducer from '../reducers'

const combinedReducers = combineReducers({
firebase: firebaseReducer,
root : rootReducer
})

console.log("Call here")
const store = createStore(combinedReducers);

export default store;