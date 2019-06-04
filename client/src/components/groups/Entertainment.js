import React from 'react';
import { connect } from 'react-redux';
import { fetchStoriesByCategory } from '../../actions';

import CategoryHeading from '../CategoryHeading';
import Stories from '../Stories';

class Entertainment extends React.Component {
  render() {
    return (
      <div>
        <CategoryHeading color='#f368e0' text='white' category='Entertainment' headings={['movies','celebrities']}/>
        <Stories load={() => this.props.fetchStoriesByCategory('entertainment')} />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchStoriesByCategory }
)(Entertainment);
