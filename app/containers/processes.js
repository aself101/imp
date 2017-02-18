/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
processes.js: Where all infotype and tool process information is located
********************************************************/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ListItem from '../components/processes/list-item';
import ToolItem from '../components/tools/tool-item';
import ProcessIntroduction from '../components/processes/introduction';
import InfotypeDisplay from '../components/processes/infoTypeDisplay';
import ToolDisplay from '../components/tools/toolDisplay';
import Autocomplete from '../components/autocomplete';
import { fetchIntro, selectTool, fetchInfotypeVersionsServer,
  fetchToolVersionsServer } from '../actions';

class Processes extends Component {
  constructor(props) {
    super(props);
    this.mapInfoTypes = this.mapInfoTypes.bind(this);
    this.getInfoType = this.getInfoType.bind(this);
    this.mapTools = this.mapTools.bind(this);
  }
  mapInfoTypes() {
    return this.props.infoTypes.map((info) => (
      <ListItem key={info.guid} infoType={info} selectInfotype={this.props.fetchInfotypeVersions} />
    ));
  }
  mapTools() {
    return this.props.tools.map((tool) => (
      <ToolItem key={tool.guid} tool={tool} selectTool={this.props.fetchToolVersions} />
    ));
  }
  getInfoType() {
    var name = document.getElementById('process-autocomplete-infotype').value;
    var iType, guid;
    for (let i = 0; i < this.props.infoTypes.length; i++) {
      if (name === this.props.infoTypes[i].name) {
        guid = this.props.infoTypes[i].guid;
        iType = this.props.infoTypes[i];
      }
    }
    document.getElementById('process-autocomplete-infotype').value = '';
    return this.props.fetchInfotypeVersions(iType, guid);
  }
  render() {
    return (
      <div className="push"><br /><hr />
        <div className="row">
          <div id="process-list" className="col s4">

            <div className="row">
              <Autocomplete id={'process-autocomplete-infotype'} label={'Search Information Type'} infoTypes={this.props.infoTypes} />
              <div className="col s4">
                <a className="btn waves-light waves-effect" onClick={this.getInfoType}>Fetch</a>
              </div>
            </div>

            <ul className="collapsible" data-collapsible="expandable">
              <li onClick={this.props.fetchIntro}>
                <div className="collapsible-header"><i className="material-icons">info_outline</i>Introduction</div>
              </li>
              <li>
                <div className="collapsible-header"><i className="material-icons">filter_drama</i>Tools</div>
                <div className="collapsible-body">
                  <ul id="tool-list" className="collection">
                    { this.mapTools() }
                  </ul>
                </div>
              </li>
              <li>
                <div className="collapsible-header"><i className="material-icons">info</i>Information Types</div>
                <div id="infotype-list" className="collapsible-body">
                  <ul className="collection">
                    { this.mapInfoTypes() }
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div id="process-definition" className="col s8">
            <ProcessIntroduction />
            <ToolDisplay tool={this.props.selectedTool} versions={this.props.toolVersions} />
            <InfotypeDisplay infoType={this.props.selectedInfotype} versions={this.props.infoVersions} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    infoTypes: state.infoTypes,
    selectedInfotype: state.infoType.selectedInfotype.infoType,
    tools: state.tools.allTools,
    selectedTool: state.tools.selectedTool.tool,
    toolVersions: state.tools.selectedTool.versions,
    infoVersions: state.infoType.selectedInfotype.versions
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchIntro: fetchIntro,
    selectTool: selectTool,
    fetchInfotypeVersions: fetchInfotypeVersionsServer,
    fetchToolVersions: fetchToolVersionsServer
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Processes);
