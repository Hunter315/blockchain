import {ADD_KNOWN_ADDRESS} from '../constants/action-types';



export function addKnownAddress(payload) {
    return { type: ADD_KNOWN_ADDRESS, payload }
  };