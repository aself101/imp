/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
infotypeDisplay.js: Displays information about an infotype; users can
use html formatting when creating or editing a tool and it
renders as needed
********************************************************/
import React from 'react';

import InfotypeVerions from './infoTypeVersions';

const InfotypeDisplay = ({ infoType = {}, versions = [] }) => {
  if (!infoType) return <span></span>;

  return (
    <div>
      <div id="infotypeDisplay" className="row">
        <div className="col s12">
          <h3><u>{ infoType.name }</u></h3>
          <blockquote id="infodesc">{ infoType.description }</blockquote>
          <p className="flow-text">
            <b>Access Permissions: </b> <span dangerouslySetInnerHTML={{__html: infoType.accessDescription }}></span>
          </p>
          <p className="flow-text">
            <b>Locating: </b> <span dangerouslySetInnerHTML={{__html: infoType.locationInfo }}></span>
          </p>
          <p className="flow-text">
            <b>Creating: </b> <span dangerouslySetInnerHTML={{__html: infoType.createDescription }}></span>
          </p>
          <p className="flow-text">
            <b>Updating (Change Control): </b> <span dangerouslySetInnerHTML={{__html: infoType.changeDescription }}></span>
          </p>
          <p className="flow-text">
            <b>Auditing: </b> <span dangerouslySetInnerHTML={{__html: infoType.auditDescription }}></span>
          </p>
        </div>
      </div>
      <p className="flow-text"><u>{ versions.length === 0 ? '' : 'Versions' }</u></p>
      <InfotypeVerions versions={versions} />
    </div>
  );
};

export default InfotypeDisplay;
