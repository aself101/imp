/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
list-item.js: displays infotypes in a clickable list with custom
icons based on the location of the infotype
********************************************************/
import React from 'react';


const ListItem = ({ infoType, selectInfotype }) => {
  if (!infoType) return <span></span>;
  const loc = infoType.location;

  if (loc === 'DMT') {
    return (
      <li className="collection-item avatar hover" onClick={() => selectInfotype(infoType, infoType.guid)}>
        <i className="material-icons circle">folder</i>
        <span className="title"><b>{ infoType.name }</b></span>
        <p>{ loc }</p>
      </li>
    );
  } else if (loc === 'Apache Subversion' || loc === 'JIRA') {
    return (
      <li className="collection-item avatar hover" onClick={() => selectInfotype(infoType, infoType.guid)}>
        <i className="material-icons circle purple">code</i>
        <span className="title"><b>{ infoType.name }</b></span>
        <p>{ loc }</p>
      </li>
    );
  } else if (loc === 'ODB' || loc === 'GOA' || loc === 'LAMB' || loc === 'Control' || loc === 'GEA') {
    return (
      <li className="collection-item avatar hover" onClick={() => selectInfotype(infoType, infoType.guid)}>
        <i className="material-icons circle green">insert_chart</i>
        <span className="title"><b>{ infoType.name }</b></span>
        <p>{ loc }</p>
      </li>
    );
  } else if (loc === 'WordPress' || loc === 'Wiki' || loc === 'Gemini Focus') {
    return (
      <li className="collection-item avatar hover" onClick={() => selectInfotype(infoType, infoType.guid)}>
        <i className="material-icons circle blue">description</i>
        <span className="title"><b>{ infoType.name }</b></span>
        <p>{ loc }</p>
      </li>
    );
  } else {
    return (
      <li className="collection-item avatar hover" onClick={() => selectInfotype(infoType, infoType.guid)}>
        <i className="material-icons circle red">list</i>
        <span className="title"><b>{ infoType.name }</b></span>
        <p>{ loc }</p>
      </li>
    );
  }


};

export default ListItem;
