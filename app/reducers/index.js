/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
index.js: Main entry point for all reducers; creates global state
********************************************************/
import { combineReducers } from 'redux';
import infoTypesReducer from './infoTypes_reducer';
import infoTypeReducer from './infoType_reducer';
import toolsReducer from './tools_reducer';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  infoTypes: infoTypesReducer,
  infoType: infoTypeReducer,
  tools: toolsReducer,
  auth: authReducer
});

export default rootReducer;
