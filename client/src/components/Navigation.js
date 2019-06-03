import React from 'react';
import { Link } from 'react-router-dom'


/**
 * Navigation bar 
 * @type const
 */
const Navigation = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: '#34495e' }}
      >
        <Link className="navbar-brand" to="/">
          Spotlight
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link className="nav-link" to="/stories">
                Stories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/sources'} >
                Sources
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
