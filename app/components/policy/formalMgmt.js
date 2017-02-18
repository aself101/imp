/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
formalMgmt.js: Fm classifications
********************************************************/
import React from 'react';

const FormalManagement = ({}) => {
  return (
    <div>
      <h3>3. Formal Management</h3>
      <p className="flow-text">
        The following are classifications for information types requiring formal management. Some
        information types may fall under one, a few, or all of these levels of classification.
      </p>
      <p className="flow-text">
        <b>3.1 Access Permissions: </b>This defines internal access to data that can be controlled
        through certain permission levels. At Gemini there are various levels of access
        permissions. These are applicable to each project or department:
      </p>
      <div className="row">
        <div className="col s8 offset-s1">
          <blockquote>Department level access</blockquote>
          <blockquote>Line management level access</blockquote>
          <blockquote>Directorate level access</blockquote>
          <blockquote>ITAR restriction</blockquote>
        </div>
      </div>
      <p className="flow-text">
        <b>3.2 Change Control: </b>This defines information types that require an approval process
        and change management in order to alter the state of the existing document.
      </p>
      <p className="flow-text">
        <b>3.3 Unique Identification: </b>This defines the unique identification each information
        type will receive if it is to be change controlled or is of a type that requires a specific
        index for search and retrieval.
      </p>
      <p className="flow-text">
        <b>3.4 Auditing: </b>This defines the basis for recurring audits on information types given
        their relevancy to the state of a system, timestamp to ensure content remains
        current and archival of information which no longer impacts the state of a project or
        system.
      </p>
    </div>
  );
};

export default FormalManagement;
