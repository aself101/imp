/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
createAndEdit.js: Create, Edit and Delete (infoType and tool) actions happen here
********************************************************/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CreateInfoTypeForm from '../components/createInfoTypeForm';
import EditInfoTypeForm from '../components/editInfoTypeForm';
import DeleteInfoType from '../components/deleteInfoType';
import CreateTool from '../components/tools/createTool';
import EditTool from '../components/tools/editTool';
import DeleteTool from '../components/tools/deleteTool';

import { createInfotypeServer, fetchEditInfotypeServer,
  editInfotypeServer, selectInfotype, deleteInfoTypeServer,
  createToolServer, fetchEditToolServer, editToolServer,
  selectTool, deleteToolServer, selectToolDelete, selectInfotypeToDelete } from '../actions';

class CreateAndEdit extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container push">
        <center>
          <h2>Manage Information Types & Tools</h2>
        </center>
        <hr />
        <ul className="collapsible popout" data-collapible="accordion">
          <li>
            <div className="collapsible-header"><i className="material-icons">input</i>Create Information Type</div>
            <div className="collapsible-body">
              <CreateInfoTypeForm submitInfotype={this.props.createInfotype} />
            </div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">mode_edit</i>Edit Information Type</div>
            <div className="collapsible-body">
              <EditInfoTypeForm
                infoTypes={this.props.infoTypes}
                selectedInfotype={this.props.selectedInfoToEdit}
                fetchEditInfotype={this.props.fetchEditInfotype}
                editInfotype={this.props.editInfotype}
              />
            </div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">delete</i>Delete Information Type</div>
            <div className="collapsible-body">
              <DeleteInfoType
                infoTypes={this.props.infoTypes}
                selectInfotype={this.props.selectInfotypeToDelete}
                deleteInfoType={this.props.deleteInfoType}
              />
            </div>
          </li>
        </ul>
        <br /><hr /><br />
        <ul className="collapsible popout" data-collapible="accordion">
          <li>
            <div className="collapsible-header"><i className="material-icons">input</i>Create Tool</div>
            <div className="collapsible-body">
              <CreateTool createTool={this.props.createTool} />
            </div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">mode_edit</i>Edit Tool</div>
            <div className="collapsible-body">
              <EditTool
                tools={this.props.tools}
                selectedTool={this.props.editableTool}
                fetchTool={this.props.fetchEditTool}
                editTool={this.props.editTool}
              />
            </div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">delete</i>Delete Tool</div>
            <div className="collapsible-body">
              <DeleteTool
                tools={this.props.tools}
                selectedTool={this.props.selectedToDelete}
                selectTool={this.props.selectToolDelete}
                deleteTool={this.props.deleteTool}
              />
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    infoTypes: state.infoTypes,
    selectedInfotype: state.infoType.selectedInfotype.infoType,
    selectedInfoToEdit: state.infoType.selectedToEdit,
    tools: state.tools.allTools,
    editableTool: state.tools.selectedToEdit,
    selectedToDelete: state.tools.selectedToDelete
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createInfotype: createInfotypeServer,
    fetchEditInfotype: fetchEditInfotypeServer,
    editInfotype: editInfotypeServer,
    selectInfotype: selectInfotype,
    deleteInfoType: deleteInfoTypeServer,
    createTool: createToolServer,
    fetchEditTool: fetchEditToolServer,
    editTool: editToolServer,
    selectTool: selectTool,
    deleteTool: deleteToolServer,
    selectToolDelete: selectToolDelete,
    selectInfotypeToDelete: selectInfotypeToDelete,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAndEdit);
