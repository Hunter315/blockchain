import { ADD_KNOWN_ADDRESS } from '../constants/action-types';






const initialState = {
    knownAddresses: []
};

function rootReducer(state = initialState, action) {
console.log("rootReducer")
    if(action.type === ADD_KNOWN_ADDRESS) {
        return Object.assign({}, state, {
            knownAddresses: state.knownAddresses.concat(action.payload)
        });
    }

    return state;
};
 
export default rootReducer;