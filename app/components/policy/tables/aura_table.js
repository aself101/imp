/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
aura_table.js: AURA managed infotypes; hardcoded
********************************************************/
import React from 'react';
import { covByAURA } from '../../data';

const AURATable = ({}) => {
  return (
    <table className="bordered highlight centered responsive-table">
      <thead>
        <tr>
          <th>Information Type</th>
          <th>Access Permissions</th>
          <th>Change Control</th>
          <th>Unique ID</th>
          <th>Audits</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {
          covByAURA.map((i) => (
            <tr key={i.infoType}>
              <td>{ i.infoType }</td>
              <td>{ i.access }</td>
              <td>{ i.change }</td>
              <td>{ i.unique }</td>
              <td>{ i.audit }</td>
              <td>{ i.loc }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default AURATable;
