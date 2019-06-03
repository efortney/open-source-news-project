import React from 'react';
import { connect } from 'react-redux';
import { fetchTopStories } from '../actions';
import Stories from './Stories';

class TopStories extends React.Component {
  render() {
    return (
      <div>
        <Stories load={() => this.props.fetchTopStories()} />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchTopStories }
)(TopStories);
