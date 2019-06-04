import React from 'react';
import { connect } from 'react-redux';
import { fetchStoriesByCategory } from '../../actions';

import CategoryHeading from '../CategoryHeading';
import Stories from '../Stories';

class Money extends React.Component {
  render() {
    return (
      <div>
        <CategoryHeading color='#2ecc71' text='white' category='Finance' headings={['finance','housing','investing','business','economy']} />
        <Stories load={() => this.props.fetchStoriesByCategory('business')} />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchStoriesByCategory }
)(Money);
