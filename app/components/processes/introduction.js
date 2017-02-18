/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
introduction.js: Hardcoded introduction to the process portion
of the application
********************************************************/
import React from 'react';

const ProcessIntroduction = ({}) => {
  return (
    <div id="process-intro" className="row">
      <div className="col s12">
        <center>
          <h3>Introduction & How to use</h3> <hr />
        </center>
        <p className="flow-text">
          The following is to be used in conjunction with the OWP-POL-0002 Information
          Management Policy. This component lists all storage tools and information types currently in use at Gemini and the
          information management principles associated with each. Please use the <b>OWP-POL-
          0002 Information Management Policy</b> to identify which storage tool is required for which
          information type.
        </p>
        <p className="flow-text">
          Please note that varying information management principles are applicable to each tool depending
          on the information type that uses the tool. Please use the OWP-POL-0002 Information Management
          Policy to identify the appropriate information management principles required. In instances where
          policies, processes and tutorials have been located for these tools, these have been listed and linked
          as appropriate.
        </p>
        <p className="flow-text">
          <b>If you would like to add an information type to this document or update an existing one:</b> <br />
          The process involves submitting the information type to your manager and they will forward it to Systems Engineering to append it to the policy.
          Before an information type is submitted to your manager, answer the following questions.
        </p>
        <ol className="flow-text" type="i">
          <li>What is the information type and does it already exist in the policy?</li>
          <li>Does it require access permissions?</li>
          <li>What is the process to create the document?</li>
          <li>Where is it located (<a>get the actual link to the document</a>)?</li>
          <li>Is there a change control process for updating? Define it. If it is just an approval, state it.</li>
          <li>Is periodic auditing required?</li>
        </ol>
        <p className="flow-text">
          Once this information is gathered submit it to your manager who will forward it to Systems Engineering.
        </p>
      </div>
    </div>
  );
};

export default ProcessIntroduction;
