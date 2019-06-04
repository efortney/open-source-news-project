import React, { Component } from 'react';
import { connect } from 'react-redux';


class About extends Component {
  render() {
    return (
      <div className="container">
        <p className='text-muted'> Powered by NewsAPI.org </p>
      </div>
    );
  }
}

export default connect()(About);
