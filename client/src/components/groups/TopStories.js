import React from 'react';
import { connect } from 'react-redux';
import { fetchTopStories } from '../../actions';

import CategoryHeading from '../CategoryHeading';
import Stories from '../Stories';

class TopStories extends React.Component {
  render() {
    return (
      <div>
        <CategoryHeading color='#f39c12' text='white' category='Top Stories' headings={['politics','technology','finance']} />
        <Stories load={() => this.props.fetchTopStories()} />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchTopStories }
)(TopStories);
