/********************************************************
Alexander Self
2/13/2017
helpers.js: Helper functions separated from edit classes
********************************************************/
import { storageLocs, toolManagers } from './components/data';

export function populateEditForm(infoType) {
  if (infoType.access === 'x') document.getElementById('eaccessPermissions').checked = true;
  if (infoType.changeControl === 'x') document.getElementById('echangeControl').checked = true;
  if (infoType.uniqueID === 'x') document.getElementById('euniqueID').checked = true;
  if (infoType.audits === 'x') document.getElementById('eaudits').checked = true;

  var locFound = false;
  /* Check for select options: if found, use select field, else it was manually entered */
  for (let i = 0; i < storageLocs.length; i++) {
    if (infoType.location === storageLocs[i].value) locFound = true;
  }

  if (locFound) document.getElementById('einfoTypeLoc').value = infoType.location;
  else document.getElementById('einfoTypeOtherLoc').value = infoType.location;


  document.getElementById('einfoType').value = infoType.name;
  document.getElementById('einfoTypeDesc').value = infoType.description;
  document.getElementById('einfoTypeLink').value = infoType.link;
  document.getElementById('einfoTypeLocationInfo').value = infoType.locationInfo;
  document.getElementById('einfoTypeCreating').value = infoType.createDescription;
  document.getElementById('einfoTypeAccess').value = infoType.accessDescription;
  document.getElementById('einfoTypeChangeControl').value = infoType.changeDescription;
  document.getElementById('einfoTypeUniqueID').value = infoType.uniqueidDescription;
  document.getElementById('einfoTypeAudits').value = infoType.auditDescription;
  return;
}

export function populateToolEditForm(tool) {
  var managerFound = false;
  /* Check for select options: if found, use select field, else it was manually entered */
  for (let i = 0; i < toolManagers.length; i++) {
    if (tool.manager === toolManagers[i].value) managerFound = true;
  }

  if (managerFound) document.getElementById('eToolManager').value = tool.manager;
  else document.getElementById('eToolManagerOther').value = tool.manager;


  document.getElementById('eToolName').value = tool.name;
  document.getElementById('eToolDesc').value = tool.description;
  document.getElementById('eToolContentManager').value = tool.contentManager;
  document.getElementById('eToolTutorials').value = tool.existingTutorials;
  document.getElementById('eToolProcess').value = tool.existingProcesses;
  document.getElementById('eToolPolicies').value = tool.existingPolicy;
  document.getElementById('eToolLocation').value = tool.location;
  return;
}












/* END */
