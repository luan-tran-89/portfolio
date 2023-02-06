

import React from "react";

class Links extends React.Component {
  render() {
    return (
      <div className="socials">
        <ul>
          <li>
            <a href="https://github.com/luan-tran-89" target="_blank" rel="noopener noreferrer" >
              <span className="social ico-circle">
                <i className="ion-social-github"></i>
              </span>
            </a>
          </li>
          <li>
            <a href="https://gitlab.com/GaSieuGru" target="_blank" rel="noopener noreferrer" >
              <span className="social ico-circle">
                <i className="fa-brands fa-gitlab"></i>
              </span>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/luan-tran2589" target="_blank" rel="noopener noreferrer" >
              <span className="social ico-circle">
                <i className="ion-social-linkedin"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links;
