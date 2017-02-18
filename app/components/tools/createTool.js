/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
createTool: Form to create a new tool
********************************************************/

import React from 'react';
import { generateGUID, toolManagers } from '../data';

const CreateTool = ({ createTool }) => {

  function packageFormData(e) {
    var manager;
    var tManagers = document.getElementById('toolManager');
    if (!document.getElementById('toolManagerOther').value) {
      for (let i = 0; i < tManagers.length; i++) {
        if (tManagers[i].selected) manager = tManagers[i].value;
      }
    } else {
      manager = document.getElementById('toolManagerOther').value;
    }

    var formObj = {
      _timestamp: new Date(),
      guid: generateGUID(),
      name: document.getElementById('toolName').value,
      description: document.getElementById('toolDesc').value,
      manager: manager,
      contentManager: document.getElementById('toolContentManager').value,
      existingTutorials: document.getElementById('toolTutorials').value,
      existingProcesses: document.getElementById('toolProcess').value,
      existingPolicy: document.getElementById('toolPolicies').value,
      location: document.getElementById('toolLocation').value
    };
    document.getElementById('createTool').reset();
    createTool(formObj);
  }

  return (
    <div className="row">
      <form className="col s12" id="createTool">
        <div className="row">
          <div className="input-field col s12">
            <input id="toolName" type="text" className="validate" />
            <label htmlFor="toolName">Tool Name</label>
          </div>
          <div className="input-field col s12">
            <textarea id="toolDesc" className="materialize-textarea"></textarea>
            <label htmlFor="toolDesc">Tool Description</label>
          </div>
          <div className="input-field col s12">
            <textarea id="toolLocation" className="materialize-textarea"></textarea>
            <label htmlFor="toolLocation">Tool Location</label>
          </div>
          <div className="col s6">
            <label htmlFor="toolManager">Tool Manager</label>
            <select id="toolManager" className="browser-default">
              <option defaultValue="" disabled>Choose your option</option>
              {
                toolManagers.map((s) => (
                  <option key={s.value} value={s.value}>{s.options}</option>
                ))
              }
            </select>
          </div>
          <div className="input-field col s6">
            <input id="toolManagerOther" type="text" className="validate" placeholder="If this field is filled, it will be selected" />
            <label htmlFor="toolManagerOther">Tool Manager (Other)</label>
          </div>
          <div className="input-field col s12">
            <textarea id="toolContentManager" className="materialize-textarea"></textarea>
            <label htmlFor="toolContentManager">Content Manager</label>
          </div>
          <div className="input-field col s12">
            <textarea id="toolPolicies" className="materialize-textarea"></textarea>
            <label htmlFor="toolPolicies">Existing Policies</label>
          </div>
          <div className="input-field col s12">
            <textarea id="toolProcess" className="materialize-textarea"></textarea>
            <label htmlFor="toolProcess">Existing Process</label>
          </div>
          <div className="input-field col s12">
            <textarea id="toolTutorials" className="materialize-textarea"></textarea>
            <label htmlFor="toolTutorials">Tutorials</label>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <button className="btn-large waves-effect waves-light" type="submit" onClick={(e) => { e.preventDefault(); packageFormData(e); }}>Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTool;


/* END */
