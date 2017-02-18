/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
toolDisplay.js: Displays information about a tool; users can
use html formatting when creating or editing a tool and it
renders as needed
********************************************************/
import React from 'react';

import ToolVersions from './toolVersions';

const ToolDisplay = ({ tool, versions }) => {
  if (!tool) return <span></span>;

  return (
    <div id="toolDisplay" className="row">
      <div className="col s12">
        <h3><u>{ tool.name }</u></h3>
        <blockquote id="infodesc">{ tool.description }</blockquote>
        <p className="flow-text">
          <b>Tool Manager: </b> <span dangerouslySetInnerHTML={{__html: tool.manager }}></span>
        </p>
        <p className="flow-text">
          <b>Content Manager: </b> <span dangerouslySetInnerHTML={{__html: tool.contentManager }}></span>
        </p>
        <p className="flow-text">
          <b>Location: </b> <span dangerouslySetInnerHTML={{__html: tool.location }}></span>
        </p>
        <p className="flow-text">
          <b>Existing Policy: </b> <span dangerouslySetInnerHTML={{__html: tool.existingPolicy }}></span>
        </p>
        <p className="flow-text">
          <b>Existing Process: </b> <span dangerouslySetInnerHTML={{__html: tool.existingProcesses }}></span>
        </p>
        <p className="flow-text">
          <b>Tutorial: </b> <span dangerouslySetInnerHTML={{__html: tool.existingTutorials }}></span>
        </p>
      </div>
      <p className="flow-text"><u>{ versions.length === 0 ? '' : 'Versions' }</u></p>
      <ToolVersions versions={versions} />
    </div>
  );
};

export default ToolDisplay;
