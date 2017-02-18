/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
infoType_reducer.js: Maintains state for single infotypes
********************************************************/
import { FETCH_EDIT_INFO_TYPE, SELECT_INFO_TYPE, FETCH_INTRO,
  SELECT_INFO_TYPE_DELETE } from '../actions/types';

const initState = {
  selectedInfotype: {
    infoType: {},
    versions: []
  },
  selectedToEdit: {},
  selectedToDelete: {}
};

export default function infoTypeReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_EDIT_INFO_TYPE:
      return Object.assign({}, state, {
        selectedToEdit: action.payload
      });
    case SELECT_INFO_TYPE:
      return Object.assign({}, state, {
        selectedInfotype: {
          infoType: action.payload,
          versions: action.versions
        }
      });
    case FETCH_INTRO:
      return Object.assign({}, state);
    case SELECT_INFO_TYPE_DELETE:
      return Object.assign({}, state, {
        selectedToDelete: action.payload
      });
    default:
      return initState;
  }
}





























/* END */
