/********************************************************
Alexander Self
2/13/2017
editInfoTypeForm.js: Main edit form for information types
********************************************************/
import React from 'react';

import { storageLocs, generateGUID, generateVID } from './data';
import Autocomplete from './autocomplete';


const EditInfoTypeForm = ({ infoTypes, selectedInfotype, fetchEditInfotype, editInfotype }) => {
  var autoInfo = {};
  /* Fetches the guid for the information type to be edited */
  function fetchGUID() {
    let eInfotype = document.getElementById('edit-autocomplete-infotype').value;
    var guid;
    for (let i = 0; i < infoTypes.length; i++) {
      if (eInfotype === infoTypes[i].name) {
        guid = infoTypes[i].guid;
        break;
      }
    }
    document.getElementById('edit-autocomplete-infotype').value = '';
    document.getElementById('editInfoType').reset();
    return fetchEditInfotype(guid);
  }

  const packageFormData = () => {
    var location = '',
        access = '',
        changeControl = '',
        uniqueID = '',
        audits = '',
        formObj = {};

    var loc = document.getElementById('einfoTypeLoc');

    if (document.getElementById('eaccessPermissions').checked === true) {
      access = 'x';
    }
    if (document.getElementById('echangeControl').checked === true) {
      changeControl = 'x';
    }
    if (document.getElementById('euniqueID').checked === true) {
      uniqueID = 'x';
    }
    if (document.getElementById('eaudits').checked === true) {
      audits = 'x';
    }

    if (!document.getElementById('einfoTypeOtherLoc').value) {
      for (let i = 0; i < loc.length; i++) {
        if (loc[i].selected) location = loc[i].value;
      }
    } else {
      location = document.getElementById('einfoTypeOtherLoc').value;
    }

    formObj = {
      guid: selectedInfotype.guid,
      _timestamp: new Date(),
      name: document.getElementById('einfoType').value,
      description: document.getElementById('einfoTypeDesc').value,
      location: location,
      locationInfo: document.getElementById('einfoTypeLocationInfo').value,
      link: document.getElementById('einfoTypeLink').value,
      createDescription: document.getElementById('einfoTypeCreating').value,
      access: access,
      accessDescription: document.getElementById('einfoTypeAccess').value,
      changeControl: changeControl,
      changeDescription: document.getElementById('einfoTypeChangeControl').value,
      uniqueID: uniqueID,
      uniqueDescription: document.getElementById('einfoTypeUniqueID').value,
      audits: audits,
      auditDescription: document.getElementById('einfoTypeAudits').value,
      versionID: generateVID()
    };

    document.getElementById('editInfoType').reset();
    return editInfotype(formObj);
  };

  return (
    <div className="row">
      <div className="col s12">
        <div className="row">
          <Autocomplete id={'edit-autocomplete-infotype'} label={'Fetch Information Type'} infoTypes={infoTypes} />
          <div className="col s4">
            <button className="btn waves-light waves-effect" onClick={fetchGUID}>Fetch</button>
          </div>
        </div>
      </div>
      <form className="col s12" id="editInfoType">
        <div className="row">
          <div className="col s12">
            <label htmlFor="einfoType">Information Type Name</label>
            <input id="einfoType" type="text" className="validate" />
          </div>
          <div className="col s12">
            <label htmlFor="einfoTypeDesc">Information Type Description</label>
            <textarea id="einfoTypeDesc" className="materialize-textarea"></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <label htmlFor="einfoTypeLoc">Information Type Location</label>
            <select id="einfoTypeLoc" className="browser-default">
              <option defaultValue="" disabled>Choose your option</option>
              {
                storageLocs.map((s) => (
                  <option key={s.value} value={s.value}>{s.options}</option>
                ))
              }
            </select>
          </div>
          <div className="input-field col s6">
            <input id="einfoTypeOtherLoc" type="text" className="validate" placeholder="If this field is filled, it will be selected" />
            <label htmlFor="einfoTypeOtherLoc">Information Storage Location (Other)</label>
          </div>
          <div className="input-field col s12">
            <input id="einfoTypeLink" type="text" className="validate" placeholder="Optional" />
            <label htmlFor="einfoTypeLink">Information Storage Location Link</label>
          </div>
          <div className="input-field col s12">
            <textarea id="einfoTypeLocationInfo" className="materialize-textarea"></textarea>
            <label htmlFor="einfoTypeLocationInfo">Locating an Information Type </label>
          </div>
          <div className="col s12">
            <label htmlFor="einfoTypeCreating">Creating Information Type</label>
            <textarea id="einfoTypeCreating" className="materialize-textarea"></textarea>
          </div>
        </div>
        <p className="flow-text">Formal Management</p><hr /><br />
        <div className="row">
          <span>
            <input type="checkbox" id="eaccessPermissions" />
            <label htmlFor="eaccessPermissions">Access Permissions</label>
          </span>
          <div className="col s12">
            <label htmlFor="einfoTypeAccess">Access Permissions Description</label>
            <textarea id="einfoTypeAccess" className="materialize-textarea"></textarea>
          </div>
        </div>
        <div className="row">
          <span>
            <input type="checkbox" id="echangeControl" />
            <label htmlFor="echangeControl">Change Control (Updating)</label>
          </span>
          <div className="col s12">
            <label htmlFor="einfoTypeChangeControl">Change Control Description</label>
            <textarea id="einfoTypeChangeControl" className="materialize-textarea"></textarea>
          </div>
        </div>
        <div className="row">
          <span>
            <input type="checkbox" id="euniqueID" />
            <label htmlFor="euniqueID">Unique Identification</label>
          </span>
          <div className="col s12">
            <label htmlFor="einfoTypeUniqueID">Unique Identification Description</label>
            <textarea id="einfoTypeUniqueID" className="materialize-textarea"></textarea>
          </div>
        </div>
        <div className="row">
          <span>
            <input type="checkbox" id="eaudits" />
            <label htmlFor="eaudits">Auditing</label>
          </span>
          <div className="col s12">
            <label htmlFor="einfoTypeAudits">Auditing Description</label>
            <textarea id="einfoTypeAudits" className="materialize-textarea"></textarea>
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
};

export default EditInfoTypeForm;
