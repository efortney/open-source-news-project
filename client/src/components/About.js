import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron" style={{marginTop:"15px"}}>
          <h1 className="display-4">Welcome to Spotlight</h1>
          <p className="lead">We got tired of seeing headlines about Donald Trump everyday for 4 years straight. So we built Spotlight so we could filter through the news and see only what we care about. No notifications, no sign in, no hashtags or fugazzi. Just news.</p>
          <hr className='my-4'/>
          <p className='lead'>
          <Link className='btn btn-block btn-raised btn-info'to={'/stories'}>
            Read Stories
          </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default connect()(About);
