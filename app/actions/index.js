/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
index.js: All actions used throughout redux application
********************************************************/

import axios from 'axios';

import { populateEditForm, populateToolEditForm } from '../helpers';
import { FETCH_INFO_TYPES, ADD_INFO_TYPE, FETCH_EDIT_INFO_TYPE, EDIT_INFO_TYPE,
  SELECT_INFO_TYPE, DELETE_INFO_TYPE, FETCH_INTRO, CREATE_TOOL, EDIT_TOOL,
  DELETE_TOOL, SELECT_TOOL, FETCH_TOOLS, FETCH_EDIT_TOOL, SELECT_TOOL_DELETE,
  CATCH_CREATE_ERROR, CATCH_EDIT_ERROR, CATCH_DELETE_ERROR, CATCH_FETCH_ERROR,
  AUTHENTICATE, AUTH_ERROR, SELECT_INFO_TYPE_DELETE } from './types';


const DEFAULT_URL = 'php/index.php';

// Main AJAX function uses promise; used in all async action calls => database interactions
export function ajax(type, id, d={}) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: type,
      url: `${DEFAULT_URL}?${id}`,
      cache: false,
      data: { data: d },
      success: (data) => {
        resolve(data);
      },
      error: (xhr, status, err) => {
        reject(new Error(xhr, status, err.toString()))
      }
    });
  });
}

/****************************************************************
  Asynchronous Actions
****************************************************************/
/* Authenticate user; check if they can add, edit, delete Information */
export function authenticateServer() {
  return function(dispatch) {
    return ajax('GET', 'authenticate')
      .then((response) => JSON.parse(response))
      .then((response) => {
        var isAuthentcated = response[0];
        var user = response[1];
        dispatch(authenticate(isAuthentcated, user));
      })
      .catch((err) => dispatch(authError('There was an error authenticating')));
  }
}
/* Fetches all information types on application load */
export function fetchInfoTypesServer() {
  return function(dispatch) {
    return ajax('GET', 'fetchInfoTypes')
      .then((response) => JSON.parse(response))
      .then((response) => dispatch(fetchInfoTypes(response)))
      .catch((err) => dispatch(fetchError(`There was an error fetching information types`)));
  }
}

/* Fetches all infotype versions when an infotype is selected */
export function fetchInfotypeVersionsServer(iType, guid) {
  $('#toolDisplay').fadeOut();
  $('#process-intro').fadeOut();
  $('#infoVersions').fadeIn();
  return function(dispatch) {
    return ajax('GET', 'fetchInfotypeVersions', guid)
      .then((response) => JSON.parse(response))
      .then((response) => dispatch(selectInfotype(iType, response)))
      .catch((err) => dispatch(fetchError(`There was an error fetching Information type versions`)));
  }
}
/* Creates a new information type */
export function createInfotypeServer(formObj) {
  if (formObj.name === '') {
    return createError('Please enter an Information Type name');
  }
  return function(dispatch) {
    return ajax('GET', 'createInfoType', formObj)
      .then((response) => JSON.parse(response))
      .then((response) => dispatch(addInfoType(response, formObj.name)))
      .catch((err) => dispatch(createError(`There was an error creating an Information Type`)));
  }
}
/* Fetches information type record for editing */
export function fetchEditInfotypeServer(infoTypeGuid) {
  return function(dispatch) {
    return ajax('GET', 'fetchEditInfotype', infoTypeGuid)
      .then((response) => JSON.parse(response))
      .then((response) => {
        populateEditForm(response);
        dispatch(fetchEditInfotype(response));
      })
      .catch((err) => dispatch(editError(`There was an error fetching an Information Type`)));
  }
}
/* Sends edited info to server fpr updates */
export function editInfotypeServer(formObj) {
  if (formObj.name === '') {
    return editError('Please enter an Information Type name, or fetch an Information Type');
  }
  return function(dispatch) {
    return ajax('GET', 'editInfoType', formObj)
      .then((response) => JSON.parse(response))
      .then((response) => dispatch(editInfoType(response, formObj.name)))
      .catch((err) => dispatch(editError(`There was an error editing an Information Type.`)));
  }
}
/* Deletes an infotype */
export function deleteInfoTypeServer(guid, name) {
  if (name === '' || name === undefined) {
    return deleteError(`Please enter an Information Type name, or fetch an Information Type`);
  }
  return function(dispatch) {
    return ajax('GET', 'deleteInfoType', guid)
      .then((response) => JSON.parse(response))
      .then((response) => dispatch(deleteInfoType(response, name)))
      .catch((err) => dispatch(deleteError(`There was an error deleting an Information Type.`)));
  }
}
/* Fetchs all tools from server */
export function fetchToolsServer() {
  return function(dispatch) {
    return ajax('GET', 'fetchTools')
      .then((response) => JSON.parse(response))
      .then((response) => dispatch(fetchTools(response)))
      .catch((err) => dispatch(fetchError(`There was an error fetching the tools`)));
  }
}
export function fetchToolVersionsServer(tool) {
  return function(dispatch) {
    return ajax('GET', 'fetchToolVersions', tool.guid)
      .then((response) => JSON.parse(response))
      .then((response) => dispatch(selectTool(tool, response)))
      .catch((err) => dispatch(fetchError(`There was an error fetching tool versions`)));
  }
}
/* Creates a new tool */
export function createToolServer(formObj) {
  if (formObj.name === '') {
    return createError('Please enter an tool name');
  }
  return function(dispatch) {
    return ajax('GET', 'createTool', formObj)
      .then((response) => JSON.parse(response))
      .then((response) => dispatch(createTool(response, formObj.name)))
      .catch((err) => dispatch(createError(`There was an error creating a tool`)));
  }
}
/* Fetches tool record for editing */
export function fetchEditToolServer(toolGuid) {
  return function(dispatch) {
    return ajax('GET', 'fetchEditTool', toolGuid)
      .then((response) => JSON.parse(response))
      .then((response) => {
        populateToolEditForm(response);
        dispatch(fetchEditTool(response));
      })
      .catch((err) => dispatch(editError(`There was an error fetching a tool`)));
  }
}
/* Edits an existing tool */
export function editToolServer(formObj) {
  if (formObj.name === '') {
    return editError('Please enter an tool name, or fetch a tool');
  }
  return function(dispatch) {
    return ajax('GET', 'editTool', formObj)
      .then((response) => JSON.parse(response))
      .then((response) => dispatch(editTool(response, formObj.name)))
      .catch((err) => dispatch(editError(`There was an error editing a tool`)));
  }
}
/* Deletes an existing tool */
export function deleteToolServer(guid, name) {
  if (name === '' || name === undefined) {
    return deleteError(`Please enter a Tool name, or fetch a Tool`);
  }
  return function(dispatch) {
    return ajax('GET', 'deleteTool', guid)
      .then((response) => JSON.parse(response))
      .then((response) => dispatch(deleteTool(response, name)))
      .catch((err) => dispatch(deleteError(`There was an error deleting a Tool`)));
  }
}
/****************************************************************
  Synchronous Actions
****************************************************************/
export function authenticate(isAuthentcated, user) {
  return {
    type: AUTHENTICATE,
    payload: isAuthentcated,
    user: user
  };
}

export function addInfoType(infoTypes, name) {
  return {
    type: ADD_INFO_TYPE,
    payload: infoTypes,
    infoName: name
  };
}

export function fetchInfoTypes(infotypes) {
  return {
    type: FETCH_INFO_TYPES,
    payload: infotypes
  };
}

export function fetchEditInfotype(infoType) {
  return {
    type: FETCH_EDIT_INFO_TYPE,
    payload: infoType
  };
}

export function editInfoType(infoTypes, name) {
  return {
    type: EDIT_INFO_TYPE,
    payload: infoTypes,
    infoName: name
  };
}

export function deleteInfoType(infoTypes, name) {
  return {
    type: DELETE_INFO_TYPE,
    payload: infoTypes,
    infoName: name
  };
}

export function selectInfotype(infoType, versions) {
  $('#infotypeDisplay').fadeIn();
  return {
    type: SELECT_INFO_TYPE,
    payload: infoType,
    versions: versions
  };
}

export function selectInfotypeToDelete(infoType) {
  return {
    type: SELECT_INFO_TYPE_DELETE,
    payload: infoType
  };
}

/* Fadeout all other displays; fade in intro */
export function fetchIntro() {
  $('#toolDisplay').fadeOut();
  $('#infoVersions').fadeOut();
  $('#infotypeDisplay').fadeOut(() => {
    $('#process-intro').fadeIn();
  });
  return {
    type: FETCH_INTRO
  };
}
/* Fadeout all other displays; fade in selected tool */
export function selectTool(tool, versions) {
  $('#infotypeDisplay').fadeOut();
  $('#infoVersions').fadeOut();
  $('#process-intro').fadeOut(() => {
    $('#toolDisplay').fadeIn();
  });
  return {
    type: SELECT_TOOL,
    payload: tool,
    versions: versions
  };
}

export function selectToolDelete(tool) {
  return {
    type: SELECT_TOOL_DELETE,
    payload: tool
  };
}

export function fetchTools(tools) {
  return {
    type: FETCH_TOOLS,
    payload: tools
  };
}

export function createTool(tools, toolName) {
  return {
    type: CREATE_TOOL,
    payload: tools,
    name: toolName
  };
}

function fetchEditTool(tool) {
  return {
    type: FETCH_EDIT_TOOL,
    payload: tool
  };
}

export function editTool(tools, toolName) {
  return {
    type: EDIT_TOOL,
    payload: tools,
    name: toolName
  };
}

export function deleteTool(tools, toolName) {
  return {
    type: DELETE_TOOL,
    payload: tools,
    name: toolName
  };
}
/****************************************************************
  Synchronous Errors
****************************************************************/
export function createError(err) {
  return {
    type: CATCH_CREATE_ERROR,
    err: err
  };
}

export function editError(err) {
  return {
    type: CATCH_EDIT_ERROR,
    err: err
  };
}

export function deleteError(err) {
  return {
    type: CATCH_DELETE_ERROR,
    err: err
  };
}

export function fetchError(err) {
  return {
    type: CATCH_FETCH_ERROR,
    err: err
  };
}

export function authError(err) {
  return {
    type: AUTH_ERROR,
    err: err
  };
}



































/* END */
