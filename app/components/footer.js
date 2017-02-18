/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
footer.js: main footer, maintains hardcoded list of internal gemini links
Links are from data.js
********************************************************/
import React from 'react';

function Footer(props) {
  const { list } = props;

  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="black-text">Information Management</h5>
            <p className="black-text text-lighten-4">Systems Engineering</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="black-text">Internal Links</h5>
            <ul>
              {
                list.map(l => (
                  <li key={l.href}>
                    <a className="black-text text-lighten-3" href={l.href} target="_blank">
                      {l.name}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <span className="black-text">© 2017 Gemini</span>
        </div>
      </div>
    </footer>
  )
}
export default Footer;
