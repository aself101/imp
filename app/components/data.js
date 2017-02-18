/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
data.js: Hard coded constants and uniqueid functions used throughout app
********************************************************/
// Generates a unique ID
export const generateGUID = () => {
  var d = new Date().getTime();
  if(window.performance && typeof window.performance.now === "function"){
      d += performance.now(); //use high-precision timer if available
  }
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
};
// Generates a unique ID
export const generateVID = () => {
  var d = new Date().getTime();
  if(window.performance && typeof window.performance.now === "function"){
      d += performance.now(); //use high-precision timer if available
  }
  var sid = 'xxxxxxxxxx-xxxx-xxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return sid;
};

// For footer information
export const LINKS = [
  { href: '', name: 'Development', icon: 'dashboard' },
  { href: '', name: 'Science', icon: 'polymer' },
  { href: '', name: 'Administration' , icon: 'supervisor_account'},
  { href: '', name: 'Safety', icon: 'verified_user' },
  { href: '', name: 'ITS', icon: 'assessment' }
];

export const covByAURA = [
  { infoType: 'Quotes', access: '', change: '', unique: '', audit: '', loc: 'CAS, Reqless' },
  { infoType: 'Contracts', access: 'x', change: '', unique: 'x', audit: '', loc: 'Carina' },
  { infoType: 'Employee Performance Reviews', access: 'x', change: '', unique: '', audit: '', loc: 'Ultipro' },
  { infoType: 'Property Management Tool', access: '', change: '', unique: '', audit: '', loc: 'CAS' },
  { infoType: 'Recruitment Information Records', access: 'x', change: '', unique: '', audit: '', loc: 'Ultipro' },
  { infoType: 'Timecard Data', access: 'x', change: 'x', unique: '', audit: 'x', loc: 'Web timesheets' },
  { infoType: 'Training', access: '', change: '', unique: '', audit: 'x', loc: 'DMT' },
];

export const infoNotCov = [
  { infoType: 'Daily Planning', reason: 'Team specific' },
  { infoType: 'Department Head Meeting Minutes & Documents', reason: 'Team specific' },
  { infoType: 'Directorate Meeting Minutes & Documents', reason: 'Team specific' },
  { infoType: 'Engineering Operations (Staffing & Engineering Process)', reason: 'Team specific' },
  { infoType: 'Monthly Directorate Update', reason: 'Department level' },
  { infoType: 'Operational Schedule', reason: 'Department level' },
  { infoType: 'Payroll Analytical Data', reason: 'Department level' },
  { infoType: 'Planning', reason: 'Team specific' },
  { infoType: 'Presentations', reason: 'Team specific' },
  { infoType: 'Project/Department Documentation', reason: 'Department level' },
  { infoType: 'Reports - Internal Reports', reason: 'Department level' },
  { infoType: 'Safety Leadership Team Minutes & Documents', reason: 'Team specific' },
  { infoType: 'Software - Licenses', reason: 'Department level' },
  { infoType: 'Software - Tasks & Updates', reason: 'Department level' },
  { infoType: 'Staff Survey Results', reason: 'Department level' },
];

export const abbreviations = [
  { abbr: 'CAS', def: '' },
  { abbr: 'CR', def: 'Change Request' },
  { abbr: 'DMT', def: 'Document Management Tool' },
  { abbr: 'GEA', def: '' },
  { abbr: 'GOA', def: '' },
  { abbr: 'ITAR', def: 'International Traffic in Arms Regulations' },
  { abbr: 'LAMB', def: '' },
  { abbr: 'LITMOS', def: "" },
  { abbr: 'NGO', def: 'National Gemini Office' },
  { abbr: 'ODB', def: '' },
  { abbr: 'PIO', def: 'Public Information Outreach' }
];

export const storageLocs = [
  { value: 'DMT', options: 'DMT' },
  { value: 'GEA', options: 'GEA' },
  { value: 'WordPress', options: 'WordPress' },
  { value: 'Control', options: 'Control' },
  { value: 'CR Tool', options: 'Change Request Tool' },
  { value: 'Apache Subversion', options: 'Apache Subversion' },
  { value: 'JIRA', options: 'JIRA' },
  { value: 'LAMB', options: 'LAMB' },
  { value: 'Nightlog', options: 'Nightlog' },
  { value: 'Gemini Focus', options: 'Gemini Focus' },
  { value: 'ODB', options: 'ODB' },
  { value: 'Wiki', options: 'Wiki' },
  { value: 'GOA', options: 'GOA' }
].sort(sortVal);

function sortVal(a, b) {
  if (a.value < b.value) return -1;
  if (a.value > b.value) return 1;
  return 0;
}

export const toolManagers = [
  { value: 'Finance', options: 'Finance' },
  { value: 'Science Users Support', options: 'Science Users Support' },
  { value: 'Information Technology Services (ITS)', options: 'Information Technology Services (ITS)' },
  { value: 'Software Group', options: 'Software Group' },
  { value: 'Science Operations Support', options: 'Science Operations Support' },
  { value: 'Systems Engineering', options: 'Systems Engineering' }
].sort(sortVal);









/* END */
