/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
infoMgmtTable.js: Primary policy table; infotypes loaded
dynamically from server
********************************************************/
import React from 'react';

const InfoManagementTable = ({ infoTypes = [], selectInfotype }) => {
  function activate(isInfoType, infotype={}) {
    if (isInfoType) {
      $('ul.tabs').tabs('select_tab', 'process');
      selectInfotype(infotype, infotype.guid);
      setTimeout(() => {
        history.replaceState({}, '', '/imp');
      }, 500);
    } else {
      $('ul.tabs').tabs('select_tab', 'process');
      setTimeout(() => {
        history.replaceState({}, '', '/imp');
      }, 500);
    }

  }
  return (
    <div>
      <h3>4. Information Management Table</h3>
      <p className="flow-text">
      The following table lists information types with defined storage locations and formal management
      classifications which are relevant to all of Gemini. Please refer to the Information Management
      Processes for more detailed information.
      </p>
      <div className="col s5"></div>
      <div className="col s4"><u>Management Classification</u></div>
      <div className="col s1"></div>
      <div className="col s2"><u>Storage Location</u></div>
      <table id="main-info-table" className="bordered highlight centered responsive-table">
        <thead>
          <tr>
            <th>Information Type</th>
            <th>Access Permissions</th>
            <th>Change Control</th>
            <th>Unique ID</th>
            <th>Audits</th>
            <th>DMT</th>
            <th>Other</th>
          </tr>
        </thead>
        <tbody>
          {
            infoTypes.map((info) => {
              var loc;
              if (info.location === 'DMT') {
                return (
                  <tr key={info.guid}>
                    <td>{ info.name }</td>
                    <td>{ info.access }</td>
                    <td>{ info.changeControl }</td>
                    <td>{ info.uniqueID }</td>
                    <td>{ info.audits }</td>
                    <td><a className="btn waves-effect waves-teal" href={info.link} target="_blank">x</a></td>
                    <td></td>
                  </tr>
                )
              } else {
                return (
                  <tr key={info.guid}>
                    <td>{ info.name }</td>
                    <td>{ info.access }</td>
                    <td>{ info.changeControl }</td>
                    <td>{ info.uniqueID }</td>
                    <td>{ info.audits }</td>
                    <td></td>
                    <td><a className="btn waves-effect waves-teal" href={info.link} target="_blank">{ info.location } (x)</a></td>
                  </tr>
                )
              }

            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default InfoManagementTable;
