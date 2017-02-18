/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
deleteInfoType.js: Delete infotype form with cautionary modal
********************************************************/
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Autocomplete from './autocomplete';

class DeleteInfoType extends Component {
  constructor(props) {
    super(props);
    this.getInfoType = this.getInfoType.bind(this);
  }
  getInfoType() {
    var name = document.getElementById('delete-autocomplete-infotype').value;
    var iType;
    for (let i = 0; i < this.props.infoTypes.length; i++) {
      if (name === this.props.infoTypes[i].name) iType = this.props.infoTypes[i];
    }
    document.getElementById('delete-autocomplete-infotype').value = '';
    return this.props.selectInfotype(iType);
  }
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="row">
            <Autocomplete id={'delete-autocomplete-infotype'} label={'Delete Information Type'} infoTypes={this.props.infoTypes} />
            <div className="col s4">
              <a className="btn red waves-light waves-effect" href="#deleteModal" onClick={this.getInfoType}>Delete</a>
            </div>
          </div>
        </div>
        <div id="deleteModal" className="modal">
          <div className="modal-content">
            <h4>Are you sure you want to delete the following information type:</h4>
            <p className="deleteCheck">Please note, by deleting this information type you will be deleting all associated versions.</p>
            <blockquote id="delete-blockquote">
              <p className="flow-text">
                <b>Name: </b>{ this.props.selectedToDelete.name } <br />
                <b>Description: </b> { this.props.selectedToDelete.description ? this.props.selectedToDelete.description : 'None'} <br />
                <b>Created: </b> { this.props.selectedToDelete._timestamp }
              </p>
            </blockquote>
          </div>
          <div className="modal-footer">
            <a className="modal-action modal-close btn red waves-light waves-effect"
              onClick={() => this.props.deleteInfoType(this.props.selectedToDelete.guid, this.props.selectedToDelete.name)}>
              Delete
            </a>
            <a className="modal-action modal-close btn-flat waves-light waves-effect">Close</a>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    selectedToDelete: state.infoType.selectedToDelete
  }
}

export default connect(mapStateToProps)(DeleteInfoType);
