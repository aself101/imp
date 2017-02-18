/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
notCovered_table.js: Info not covered by policy; hardcoded
********************************************************/
import React from 'react';
import { infoNotCov } from '../../data';

const NotCoveredTable = ({}) => {
  return (
    <table className="bordered highlight responsive-table">
      <thead>
        <tr>
          <th>Information Type</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
        {
          infoNotCov.map((i) => (
            <tr key={i.infoType}>
              <td>{ i.infoType }</td>
              <td>{ i.reason }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default NotCoveredTable;
