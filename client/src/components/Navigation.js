import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStoriesByTerm } from '../actions';

/**
 * Navigation bar
 * @type const
 */
class Navigation extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light  navbar-bg-light">
          <a className="navbar-brand" href="/">
            Spotlight
          </a>
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
                <a className="nav-link" href="/stories">
                  Top Stories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/politics">
                  Politics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/technology">
                  Technology
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/food">
                  Food
                </a>
              </li>
            </ul>
            <form onSubmit={fetchStoriesByTerm} className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(
  null,
  {
    fetchStoriesByTerm
  }
)(Navigation);
