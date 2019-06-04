import React from 'react';
import { connect } from 'react-redux';
import { fetchStoriesByCategory } from '../../actions';

import CategoryHeading from '../CategoryHeading';
import Stories from '../Stories';

class Sports extends React.Component {
  render() {
    return (
      <div>
        <CategoryHeading color='#f7f1e3' text='black' category='Sports' headings={['sports','soccer', 'MLS', 'NFL','NBA','NCAA','MMA','boxing', 'MLB']} />
        <Stories load={() => this.props.fetchStoriesByCategory('sports')} />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchStoriesByCategory }
)(Sports);
