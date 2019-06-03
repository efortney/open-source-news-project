import React from 'react';
import { connect } from 'react-redux';
import { fetchStoriesByTerm } from '../../actions';

import CategoryHeading from '../CategoryHeading';
import Stories from '../Stories';

class Technology extends React.Component {
  render() {
    return (
      <div>
        <CategoryHeading  category='Technology' headings={['technology','tech','programming','computer science']} />
        <Stories load={() => this.props.fetchStoriesByTerm('tech')} />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchStoriesByTerm }
)(Technology);
