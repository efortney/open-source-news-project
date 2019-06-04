import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import SearchForm from './SearchForm';
import { searchStories } from '../actions';

/**
 * Navigation bar
 * @type const
 */
class Navigation extends React.Component {

  onSubmit = formValues => {
    this.props.searchStories(formValues);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-fixed navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Open News Project
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
                  Top Stories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/politics">
                  Politics
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/money">
                  Money
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/food">
                  Food
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
            </ul>
            <SearchForm onSubmit={this.onSubmit} />
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(
  null,
  {
    searchStories
  }
)(Navigation);
