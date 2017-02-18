/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
auth_reducer.js: Maintains authenticated state 
********************************************************/
import { AUTHENTICATE } from '../actions/types';

const initState = {
  authenticated: false,
  user: null
};

export default function(state = initState, action) {
  switch (action.type) {
    case AUTHENTICATE:
      return Object.assign({}, state, {
        authenticated: action.payload,
        user: action.user
      });
    default:
      return state;
  }
}





















/* END */
