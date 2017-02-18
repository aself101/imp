/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
abbreviations.js: hardcoded abbreviations
********************************************************/
import React from 'react';

import { abbreviations } from '../data';

const Abbreviations = ({}) => {
  return (
    <div>
      <h3>6. Abbreviations</h3>
      <table className="bordered highlight centered responsive-table">
        <thead>
          <tr>
            <th>Abbreviation</th>
            <th>Definition</th>
          </tr>
        </thead>
        <tbody>
          {
            abbreviations.map((i) => (
              <tr key={i.abbr}>
                <td>{ i.abbr }</td>
                <td>{ i.def }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Abbreviations;































/* END */
