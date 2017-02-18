/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
App.js: Main entry point for front-end of the application;
All information is loaded prior to the component mounting
********************************************************/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchInfoTypesServer, fetchToolsServer, authenticateServer } from '../actions';
import Policy from './policy';
import CreateAndEdit from './createAndEdit';
import Processes from './processes';


class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.authenticate();
    this.props.fetchInfoTypes();
    this.props.fetchTools();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.authenticated) {
      $("#auth-manageinfo").css("display", "block");
      return;
    } else {
      $("#auth-manageinfo").css("display", "none");
      return;
    }
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <ul className="tabs tabs-fixed-width">
              <li className="tab"><a className="active tab-text" href="#policy">Information Management Policy</a></li>
              <li className="tab"><a className="tab-text" href="#process">Information Management Processes</a></li>
              <li className="tab" id="auth-manageinfo"><a className="tab-text" href="#createAndEdit">Manage Information Types</a></li>
              <div className="indicator"></div>
            </ul>
          </div>
          <div id="policy" className="col s12">
            <Policy />
          </div>
          <div id="process" className="col s12">
            <Processes />
          </div>
          <div id="createAndEdit" className="col s12">
            <CreateAndEdit />
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    state,
    authenticated: state.auth.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchInfoTypes: fetchInfoTypesServer,
    fetchTools: fetchToolsServer,
    authenticate: authenticateServer
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);






/* */
