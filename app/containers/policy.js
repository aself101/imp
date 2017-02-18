/********************************************************
Alexander Self
2/13/2017
policy.js: Information management policy information
Table and definitions loaded dynamically from server; everything else
is hardcoded
********************************************************/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Purpose from '../components/policy/purpose';
import HowToUse from '../components/policy/howToUse';
import FormalManagement from '../components/policy/formalMgmt';
import InfoManagementTable from '../components/policy/infoMgmtTable';
import InfoNotCovered from '../components/policy/infoNotCovered';
import Abbreviations from '../components/policy/abbreviations';
import InfoTypeDefinitions from '../components/policy/infoTypeDefinitions';
import { fetchInfotypeVersionsServer } from '../actions';

class Policy extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container push">
        <center>
          <h2>Information Management Policy</h2>
        </center>
        <hr />
        <div className="row">
          <div className="col s12 m9 l10">
            <div id="purpose" className="section scrollspy">
              <Purpose />
            </div>
            <div id="howToUse" className="section scrollspy">
              <HowToUse />
            </div>
            <div id="formalManagement" className="section scrollspy">
              <FormalManagement />
            </div>
            <div id="infoManagementTable" className="section scrollspy">
              <InfoManagementTable infoTypes={this.props.infoTypes} selectInfotype={this.props.fetchInfotypeVersions} />
            </div>
            <div id="infoNotCovered" className="section scrollspy">
              <InfoNotCovered />
            </div>
            <div id="abbreviations" className="section scrollspy">
              <Abbreviations />
            </div>
            <div id="infoTypeDefinitions" className="section scrollspy">
              <InfoTypeDefinitions infoTypes={this.props.infoTypes} />
            </div>
          </div>
          <div id="right-menu" className="col hide-on-small-only m3 l2">
            <ul className="section table-of-contents">
              <li><a href="#purpose">Purpose</a></li>
              <li><a href="#howToUse">How To Use</a></li>
              <li><a href="#formalManagement">Formal Management</a></li>
              <li><a href="#infoManagementTable">Information Management Table</a></li>
              <li><a href="#infoNotCovered">Information Not Covered</a></li>
              <li><a href="#abbreviations">Abbreviations</a></li>
              <li><a href="#infoTypeDefinitions">Information Type Descriptions</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    infoTypes: state.infoTypes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchInfotypeVersions: fetchInfotypeVersionsServer
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Policy);


















































/* END */
