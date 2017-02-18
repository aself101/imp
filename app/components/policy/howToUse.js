/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
howtoUse.js: how to use the policy
********************************************************/
import React from 'react';

const HowToUse = ({}) => {
  return (
    <div>
      <h3>2. How To Use This Document</h3>
      <p className="flow-text">
        The table from <a href="#infoManagementTable">Section 4</a> lists all information types requiring formal management within
        Gemini. Each information type has been classified with the formal management principles
        and its storage location. <b>All information types located in the table shall be stored in the
        defined location and managed based on the classifications.</b>
      </p> <hr />
      <p className="flow-text"><b>i.</b> Find the information type in the table in <a href="#infoManagementTable">Section 4</a>.</p>
      <p className="flow-text"><b>ii.</b> Determine which formal classifications apply to the information type.</p>
      <p className="flow-text"><b>iii.</b> Once an information type is placed in the defined storage location, apply formal management.</p>
      <p className="flow-text"><b>iv.</b> Use the Information Management Process - Reference Sheet in conjunction with the policy for information about creating, finding or updating documents.
      </p>
      <p className="flow-text"><b>v.</b> If the information type is ITAR controlled, follow the <a href="http://internal.gemini.edu/?q=node/744" target="_blank">required protocol</a> for
        storage and retrieval. <a href="http://internal.gemini.edu/index.php?q=node/693" target="_blank">List of ITAR controlled items</a>,
        <a href="http://internal.gemini.edu/index.php?q=node/663" target="_blank"> ITAR Gemini Compliance</a> and
        <a href="http://www.pmddtc.state.gov/regulations_laws/itar.html" target="_blank"> ITAR Regulations.</a>
      </p>
      <hr />
    </div>
  );
};

export default HowToUse;
