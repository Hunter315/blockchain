import { createStore } from 'redux';


import rootReducer from '../reducers'



console.log("Call here")
const store = createStore(rootReducer);

export default store;