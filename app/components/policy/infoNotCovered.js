/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
infoNotCovered.js: Hardcoded information not covered by the
policy
********************************************************/
import React from 'react';

import AURATable from './tables/aura_table';
import NotCoveredTable from './tables/notCovered_table';

const InfoNotCovered = ({}) => {
  return (
    <div>
      <h3>5. Information Not Covered By The Policy</h3>
      <p className="flow-text">
      The following tables list information types which are either managed directly by AURA or are
      department/team specific and do not require Gemini wide formal management.
      </p>
      <hr />
      <center>
        <p className="flow-text"><b>Managed by AURA</b></p>
      </center>
      <hr />
      <AURATable />
      <br /><hr />
      <center>
        <p className="flow-text"><b>Not Covered by the Policy</b></p>
      </center>
      <hr />
      <NotCoveredTable />
    </div>
  );
};

export default InfoNotCovered;
