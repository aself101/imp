/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
infoTypeVersions.js: Displays all versions of a given
infotype; versions are generated after a user edits
********************************************************/
import React from 'react';

const InfotypeVerions = ({ versions }) => {
  $(document).ready(function(){
    $('#infoVersions .collapsible').collapsible();
  });
  return (
    <div>
      <ul id="infoVersions" className="collapsible" data-collapsible="accordion">
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
                      <b>Access Permissions: </b> <span dangerouslySetInnerHTML={{__html: version.accessDescription }}></span>
                    </p>
                    <p>
                      <b>Locating: </b> <span dangerouslySetInnerHTML={{__html: version.locationInfo }}></span>
                    </p>
                    <p>
                      <b>Creating: </b> <span dangerouslySetInnerHTML={{__html: version.createDescription }}></span>
                    </p>
                    <p>
                      <b>Updating (Change Control): </b> <span dangerouslySetInnerHTML={{__html: version.changeDescription }}></span>
                    </p>
                    <p>
                      <b>Auditing: </b> <span dangerouslySetInnerHTML={{__html: version.auditDescription }}></span>
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

export default InfotypeVerions;
