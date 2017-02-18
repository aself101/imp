/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
deleteTool.js: Deletes a tool with cautionary modal
********************************************************/
import React, { Component } from 'react';
import Autocomplete from '../autocomplete';

class DeleteTool extends Component {
  constructor(props) {
    super(props);
    this.getTool = this.getTool.bind(this);
  }
  getTool() {
    var name = document.getElementById('delete-autocomplete-tool').value;
    var tool;
    for (let i = 0; i < this.props.tools.length; i++) {
      if (name === this.props.tools[i].name) tool = this.props.tools[i];
    }
    document.getElementById('delete-autocomplete-tool').value = '';
    return this.props.selectTool(tool);
  }
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="row">
            <Autocomplete id={'delete-autocomplete-tool'} label={'Delete Tool'} infoTypes={this.props.tools} />
            <div className="col s4">
              <a className="btn red waves-light waves-effect" href="#deleteToolModal" onClick={this.getTool}>Delete</a>
            </div>
          </div>
        </div>
        <div id="deleteToolModal" className="modal">
          <div className="modal-content">
            <h4>Are you sure you want to delete the following tool:</h4>
            <p className="deleteCheck">Please note, by deleting this tool you will be deleting all associated versions.</p>
            <blockquote id="delete-blockquote">
              <p className="flow-text">
                <b>Name: </b>{ this.props.selectedTool.name } <br />
                <b>Description: </b> { this.props.selectedTool.description ? this.props.selectedTool.description : 'None'} <br />
                <b>Created: </b> { this.props.selectedTool._timestamp }
              </p>
            </blockquote>
          </div>
          <div className="modal-footer">
            <a className="modal-action modal-close btn red waves-light waves-effect"
              onClick={() => this.props.deleteTool(this.props.selectedTool.guid, this.props.selectedTool.name)}>
              Delete
            </a>
            <a className="modal-action modal-close btn-flat waves-light waves-effect">Close</a>
          </div>
        </div>
      </div>
    );
  }
};

export default DeleteTool;









































/* END */
