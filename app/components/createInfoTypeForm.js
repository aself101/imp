/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
createInfoTypeForm.js: Form to create an information type
********************************************************/
import React from 'react';

import { storageLocs, generateGUID } from './data';

const CreateInfoTypeForm = ({ submitInfotype }) => {

  const packageFormData = () => {
    var location = '',
        access = '',
        changeControl = '',
        uniqueID = '',
        audits = '',
        formObj = {};

    var loc = document.getElementById('infoTypeLoc');

    if (document.getElementById('accessPermissions').checked === true) {
      access = 'x';
    }
    if (document.getElementById('changeControl').checked === true) {
      changeControl = 'x';
    }
    if (document.getElementById('uniqueID').checked === true) {
      uniqueID = 'x';
    }
    if (document.getElementById('audits').checked === true) {
      audits = 'x';
    }

    if (!document.getElementById('infoTypeOtherLoc').value) {
      for (let i = 0; i < loc.length; i++) {
        if (loc[i].selected) location = loc[i].value;
      }
    } else {
      location = document.getElementById('infoTypeOtherLoc').value;
    }

    formObj = {
      _timestamp: new Date(),
      guid: generateGUID(),
      name: document.getElementById('infoType').value,
      description: document.getElementById('infoTypeDesc').value,
      location: location,
      locationInfo: document.getElementById('infoTypeLocationInfo').value,
      link: document.getElementById('infoTypeLink').value,
      createDescription: document.getElementById('infoTypeCreating').value,
      access: access,
      accessDescription: document.getElementById('infoTypeAccess').value,
      changeControl: changeControl,
      changeDescription: document.getElementById('infoTypeChangeControl').value,
      uniqueID: uniqueID,
      uniqueDescription: document.getElementById('infoTypeUniqueID').value,
      audits: audits,
      auditDescription: document.getElementById('infoTypeAudits').value
    };

    document.getElementById('createInfoType').reset();
    submitInfotype(formObj);
  };


  return (
    <div className="row">
      <form className="col s12" id="createInfoType">
        <div className="row">
          <div className="input-field col s12">
            <input id="infoType" type="text" className="validate" />
            <label htmlFor="infoType">Information Type Name</label>
          </div>
          <div className="input-field col s12">
            <textarea id="infoTypeDesc" className="materialize-textarea"></textarea>
            <label htmlFor="infoTypeDesc">Information Type Description</label>
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <label htmlFor="infoTypeLoc">Information Type Location</label>
            <select id="infoTypeLoc" className="browser-default">
              <option defaultValue="" disabled>Choose your option</option>
              {
                storageLocs.map((s) => (
                  <option key={s.value} value={s.value}>{s.options}</option>
                ))
              }
            </select>
          </div>
          <div className="input-field col s6">
            <input id="infoTypeOtherLoc" type="text" className="validate" placeholder="If this field is filled, it will be selected" />
            <label htmlFor="infoTypeOtherLoc">Information Storage Location (Other)</label>
          </div>
          <div className="input-field col s12">
            <input id="infoTypeLink" type="text" className="validate" />
            <label htmlFor="infoTypeLink">Information Storage Location Link</label>
          </div>
          <div className="input-field col s12">
            <textarea id="infoTypeLocationInfo" className="materialize-textarea"></textarea>
            <label htmlFor="infoTypeLocationInfo">Locating an Information Type </label>
          </div>
          <div className="input-field col s12">
            <textarea id="infoTypeCreating" className="materialize-textarea"></textarea>
            <label htmlFor="infoTypeCreating">Creating Information Type</label>
          </div>
        </div>
        <p className="flow-text">Formal Management</p><hr /><br />
        <div className="row">
          <span>
            <input type="checkbox" id="accessPermissions" />
            <label htmlFor="accessPermissions">Access Permissions</label>
          </span>
          <div className="input-field col s12">
            <textarea id="infoTypeAccess" className="materialize-textarea"></textarea>
            <label htmlFor="infoTypeAccess">Access Permissions Description</label>
          </div>
        </div>
        <div className="row">
          <span>
            <input type="checkbox" id="changeControl" />
            <label htmlFor="changeControl">Change Control (Updating)</label>
          </span>
          <div className="input-field col s12">
            <textarea id="infoTypeChangeControl" className="materialize-textarea"></textarea>
            <label htmlFor="infoTypeChangeControl">Change Control Description</label>
          </div>
        </div>
        <div className="row">
          <span>
            <input type="checkbox" id="uniqueID" />
            <label htmlFor="uniqueID">Unique Identification</label>
          </span>
          <div className="input-field col s12">
            <textarea id="infoTypeUniqueID" className="materialize-textarea"></textarea>
            <label htmlFor="infoTypeUniqueID">Unique Identification Description</label>
          </div>
        </div>
        <div className="row">
          <span>
            <input type="checkbox" id="audits" />
            <label htmlFor="audits">Auditing</label>
          </span>
          <div className="input-field col s12">
            <textarea id="infoTypeAudits" className="materialize-textarea"></textarea>
            <label htmlFor="infoTypeAudits">Auditing Description</label>
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

export default CreateInfoTypeForm;
