import React from 'react';
import { connect } from 'react-redux';
import { fetchStoriesByTerm } from '../actions';
import Stories from './Stories';

class Money extends React.Component {
  render() {
    return (
      <div>
        <Stories load={() => this.props.fetchStoriesByTerm('money')} />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchStoriesByTerm }
)(Money);
