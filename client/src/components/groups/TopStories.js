import React from 'react';
import { connect } from 'react-redux';
import { fetchTopStories } from '../../actions';

import CategoryHeading from '../CategoryHeading';
import Stories from '../Stories';

class TopStories extends React.Component {
  render() {
    return (
      <div>
        <CategoryHeading category='Top Stories' headings={['politics','technology','finance']} />
        <Stories load={() => this.props.fetchTopStories()} />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchTopStories }
)(TopStories);
