/********************************************************
Alexander Self
2/13/2017
navbar.js: Main nav at head of the project
********************************************************/
import React from 'react';

function Navbar ({ logo, app }) {
  return (
    <header>
      <div id="nav-header" className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="" className="black-text brand-logo">{logo}</a>
            <ul className="right hide-on-med-and-down">
              <li><i className="material-icons black-text">language</i></li>
              <li className="black-text">&nbsp;&nbsp;&nbsp;{app}&nbsp;&nbsp;&nbsp;</li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
export default Navbar;
