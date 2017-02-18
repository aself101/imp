/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
infoTypes_reducer.js: Maintains the state for all infoTypes
If an infotype is created, edited or deleted, new array is retured from
the server with the updated list
********************************************************/

import { FETCH_INFO_TYPES, ADD_INFO_TYPE, CATCH_CREATE_ERROR, CATCH_DELETE_ERROR,
  CATCH_EDIT_ERROR, CATCH_FETCH_ERROR, EDIT_INFO_TYPE,
  DELETE_INFO_TYPE } from '../actions/types';


export default function infoTypeReducer(state = [], action) {
  switch (action.type) {
    case FETCH_INFO_TYPES:
      return action.payload;
    case ADD_INFO_TYPE:
      var name = action.infoName;
      Materialize.toast(`Successfully added the information type: <b>${name}</b>`, 3000, 'rounded green');
      return action.payload;
    case EDIT_INFO_TYPE:
      var name = action.infoName;
      Materialize.toast(`Successfully edited the information type: <b>${name}</b>`, 3000, 'rounded green');
      return action.payload;
    case DELETE_INFO_TYPE:
      var name = action.infoName;
      Materialize.toast(`Deleted the information type: <b>${name}</b>`, 3000, 'rounded red');
      return action.payload;
    case CATCH_CREATE_ERROR:
      Materialize.toast(action.err, 3000, 'rounded red');
      return state;
    case CATCH_EDIT_ERROR:
      Materialize.toast(action.err, 3000, 'rounded red');
      return state;
    case CATCH_DELETE_ERROR:
      Materialize.toast(action.err, 3000, 'rounded red');
      return state;
    case CATCH_FETCH_ERROR:
      Materialize.toast(action.err, 3000, 'rounded red');
      return state;
    default:
      return state;
  }
}





























/* END */
