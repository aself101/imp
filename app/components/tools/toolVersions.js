/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
toolVersions.js: Displays all versions of a tool after a user edits
it
********************************************************/
import React from 'react';

const ToolVersions = ({ versions }) => {
  $(document).ready(function(){
    $('#toolVersions .collapsible').collapsible();
  });
  return (
    <div>
      <ul id="toolVersions" className="collapsible" data-collapsible="accordion">
        {
          versions.map((version) => (
            <li key={version.versionID}>
              <div className="collapsible-header">
                <i className="material-icons">library_books</i> { version._timestamp }
                <span className="inline">Version ID: { version.versionID }</span>
              </div>
              <div className="collapsible-body">
                <div className="row">
                  <div className="col s12">
                    <h6><u>{ version.name }</u></h6>
                    <blockquote>{ version.description }</blockquote>
                    <p>
                      <b>Tool Manager: </b> <span dangerouslySetInnerHTML={{__html: version.manager }}></span>
                    </p>
                    <p>
                      <b>Content Manager: </b> <span dangerouslySetInnerHTML={{__html: version.contentManager }}></span>
                    </p>
                    <p>
                      <b>Location: </b> <span dangerouslySetInnerHTML={{__html: version.location }}></span>
                    </p>
                    <p>
                      <b>Existing Policy: </b> <span dangerouslySetInnerHTML={{__html: version.existingPolicy }}></span>
                    </p>
                    <p>
                      <b>Existing Process: </b> <span dangerouslySetInnerHTML={{__html: version.existingProcesses }}></span>
                    </p>
                    <p>
                      <b>Tutorial: </b> <span dangerouslySetInnerHTML={{__html: version.existingTutorials }}></span>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default ToolVersions;
