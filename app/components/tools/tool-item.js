/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
tool-item.js: Populated list of tools with custom icons based on
tool managers
********************************************************/
import React from 'react';


const ToolItem = ({ tool, selectTool }) => {
  if (!tool) return <span></span>;
  const manager = tool.manager;

  if (manager === 'Finance') {
    return (
      <li className="collection-item avatar hover" onClick={() => selectTool(tool)}>
        <i className="material-icons circle green">insert_chart</i>
        <span className="title"><b>{ tool.name }</b></span>
        <p>{ manager }</p>
      </li>
    );
  } else if (manager === 'Science Users Support' || manager === 'Science Operations Support') {
    return (
      <li className="collection-item avatar hover" onClick={() => selectTool(tool)}>
        <i className="material-icons circle blue">polymer</i>
        <span className="title"><b>{ tool.name }</b></span>
        <p>{ manager }</p>
      </li>
    );
  } else if (manager === 'Information Technology Services (ITS)') {
    return (
      <li className="collection-item avatar hover" onClick={() => selectTool(tool)}>
        <i className="material-icons circle">dashboard</i>
        <span className="title"><b>{ tool.name }</b></span>
        <p>{ manager }</p>
      </li>
    );
  } else if (manager === 'Software Group') {
    return (
      <li className="collection-item avatar hover" onClick={() => selectTool(tool)}>
        <i className="material-icons circle purple">code</i>
        <span className="title"><b>{ tool.name }</b></span>
        <p>{ manager }</p>
      </li>
    );
  } else if (manager === 'Systems Engineering') {
    return (
      <li className="collection-item avatar hover" onClick={() => selectTool(tool)}>
        <i className="material-icons circle grey">settings</i>
        <span className="title"><b>{ tool.name }</b></span>
        <p>{ manager }</p>
      </li>
    );
  } else {
    return (
      <li className="collection-item avatar hover" onClick={() => selectTool(tool)}>
        <i className="material-icons circle red">list</i>
        <span className="title"><b>{ tool.name }</b></span>
        <p>{ manager }</p>
      </li>
    );
  }


};

export default ToolItem;
