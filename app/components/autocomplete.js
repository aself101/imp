/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
autocomplete.js: Autocomplete component Params: id, label, infoTypes
********************************************************/

import React from 'react';

const Autocomplete = ({id, label, infoTypes}) => {
  var autoInfo = {};
  for (let i = 0; i < infoTypes.length; i++) {
    autoInfo[infoTypes[i].name] = null;
  }

  $(document).ready(function() {
    $(`#${id}.autocomplete`).autocomplete({
      data: autoInfo,
      limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    });
  });
  return (
    <div className="input-field col s8">
      <i className="material-icons prefix">search</i>
      <input type="text" id={id} className="autocomplete" />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Autocomplete;






















/* END */
