/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
infoTypeDefinitions.js: Definitions of all infoTypes; loaded
dynamically from server
********************************************************/
import React from 'react';

const InfoTypeDefinitions = ({ infoTypes = [] }) => {
  return (
    <div>
      <h3>7. Information Type Descriptions</h3>
      <table className="bordered highlight responsive-table">
        <thead>
          <tr>
            <th style={{'width':'225px'}}>Information Type</th>
            <th>Information Type Description</th>
          </tr>
        </thead>
        <tbody>
          {
            infoTypes.map((i) => (
              <tr key={i.guid}>
                <td>{ i.name }</td>
                <td>{ i.description }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default InfoTypeDefinitions;










































/* END */
