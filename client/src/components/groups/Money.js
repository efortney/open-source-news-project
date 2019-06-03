import React from 'react';
import { connect } from 'react-redux';
import { fetchStoriesByTerm } from '../../actions';

import CategoryHeading from '../CategoryHeading';
import Stories from '../Stories';

class Money extends React.Component {
  render() {
    return (
      <div>
        <CategoryHeading color='#2ecc71' text='white' category='Money' headings={['finance','housing','investing','side hussles','economy']} />
        <Stories load={() => this.props.fetchStoriesByTerm('finance')} />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchStoriesByTerm }
)(Money);
