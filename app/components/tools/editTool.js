/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
editTool.js: Form to edit a tool
********************************************************/
import React from 'react';
import Autocomplete from '../autocomplete';
import { toolManagers, generateVID } from '../data';

const EditTool = ({ tools, selectedTool, fetchTool, editTool }) => {
  function fetchGUID() {
    let eTool = document.getElementById('edit-tool-autocomplete').value;
    var guid;
    for (let i = 0; i < tools.length; i++) {
      if (eTool === tools[i].name) {
        guid = tools[i].guid;
        break;
      }
    }
    document.getElementById('edit-tool-autocomplete').value = '';
    document.getElementById('editTool').reset();
    return fetchTool(guid);
  }

  function packageFormData(e) {
    var manager;
    var tManagers = document.getElementById('eToolManager');
    if (!document.getElementById('eToolManagerOther').value) {
      for (let i = 0; i < tManagers.length; i++) {
        if (tManagers[i].selected) manager = tManagers[i].value;
      }
    } else {
      manager = document.getElementById('eToolManagerOther').value;
    }

    var formObj = {
      guid: selectedTool.guid,
      name: document.getElementById('eToolName').value,
      description: document.getElementById('eToolDesc').value,
      manager: manager,
      contentManager: document.getElementById('eToolContentManager').value,
      existingTutorials: document.getElementById('eToolTutorials').value,
      existingProcesses: document.getElementById('eToolProcess').value,
      existingPolicy: document.getElementById('eToolPolicies').value,
      location: document.getElementById('eToolLocation').value,
      _timestamp: new Date(),
      versionID: generateVID()
    };
    document.getElementById('editTool').reset();
    return editTool(formObj);
  }

  return (
    <div className="row">
      <Autocomplete id={'edit-tool-autocomplete'} label={'Fetch Tool'} infoTypes={tools} />
      <div className="col s4">
        <button className="btn waves-light waves-effect" onClick={fetchGUID}>Fetch</button>
      </div>
      <form className="col s12" id="editTool">
        <div className="row">
          <div className="col s12">
            <label htmlFor="eToolName">Tool Name</label>
            <input id="eToolName" type="text" className="validate" />
          </div>
          <div className="col s12">
            <label htmlFor="eToolDesc">Tool Description</label>
            <textarea id="eToolDesc" className="materialize-textarea"></textarea>
          </div>
          <div className="col s12">
            <label htmlFor="eToolLocation">Tool Location</label>
            <textarea id="eToolLocation" className="materialize-textarea"></textarea>
          </div>
          <div className="col s6">
            <label htmlFor="eToolManager">Tool Manager</label>
            <select id="eToolManager" className="browser-default">
              <option defaultValue="" disabled>Choose your option</option>
              {
                toolManagers.map((s) => (
                  <option key={s.value} value={s.value}>{s.options}</option>
                ))
              }
            </select>
          </div>
          <div className="col s6">
            <label htmlFor="eToolManagerOther">Tool Manager (Other)</label>
            <input id="eToolManagerOther" type="text" className="validate" placeholder="If this field is filled, it will be selected" />
          </div>
          <div className="col s12">
            <label htmlFor="eToolContentManager">Content Manager</label>
            <textarea id="eToolContentManager" className="materialize-textarea"></textarea>
          </div>
          <div className="col s12">
            <label htmlFor="eToolPolicies">Existing Policies</label>
            <textarea id="eToolPolicies" className="materialize-textarea"></textarea>
          </div>
          <div className="col s12">
            <label htmlFor="eToolProcess">Existing Process</label>
            <textarea id="eToolProcess" className="materialize-textarea"></textarea>
          </div>
          <div className="col s12">
            <label htmlFor="eToolTutorials">Tutorials</label>
            <textarea id="eToolTutorials" className="materialize-textarea"></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <button className="btn-large waves-effect waves-light" type="submit" onClick={(e) => { e.preventDefault(); packageFormData(e); }}>Update
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditTool;
