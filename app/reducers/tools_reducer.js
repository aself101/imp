/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
tools_reducer.js: Maintains the state for all tools. If a tool
is created, edited or deleted a new updated tool array will be
returned from the server
********************************************************/
import { CREATE_TOOL, EDIT_TOOL, DELETE_TOOL, SELECT_TOOL,
  FETCH_TOOLS, FETCH_EDIT_TOOL, SELECT_TOOL_DELETE, CATCH_CREATE_ERROR,
  CATCH_EDIT_ERROR, CATCH_FETCH_ERROR, CATCH_DELETE_ERROR} from '../actions/types';

const initState = {
  allTools: [],
  selectedTool: {
    tool: {},
    versions: []
  },
  selectedToEdit: {},
  selectedToDelete: {}
};

export default function(state = initState, action) {
  switch (action.type) {
    case FETCH_TOOLS:
      return Object.assign({}, state, {
        allTools: action.payload
      });
    case CREATE_TOOL:
      Materialize.toast(`Successfully added the tool: <b>${action.name}</b>`, 3000, 'rounded green');
      return Object.assign({}, state, {
        allTools: [].concat(action.payload)
      });
    case SELECT_TOOL:
      return Object.assign({}, state, {
        selectedTool: {
          tool: action.payload,
          versions: action.versions
        }
      });
    case FETCH_EDIT_TOOL:
      return Object.assign({}, state, {
        selectedToEdit: action.payload
      });
    case EDIT_TOOL:
      Materialize.toast(`Successfully edited the tool: <b>${action.name}</b>`, 3000, 'rounded green');
      return Object.assign({}, state, {
        allTools: action.payload
      });
    case DELETE_TOOL:
      Materialize.toast(`Deleted the tool: <b>${action.name}</b>`, 3000, 'rounded red');
      return Object.assign({}, state, {
        allTools: action.payload
      });
    case SELECT_TOOL_DELETE:
      return Object.assign({}, state, {
        selectedToDelete: action.payload
      });
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
