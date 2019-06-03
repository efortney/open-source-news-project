import React from 'react';
import { connect } from 'react-redux';
import { fetchStoriesByTerm } from '../../actions';

import CategoryHeading from '../CategoryHeading';
import Stories from '../Stories';

class Politics extends React.Component {
  render() {
    return (
      <div>
        <CategoryHeading color='#9b59b6' text='white' category='Politics' headings={['presidnet','foreign affairs','economy','public relations']}/>
        <Stories load={() => this.props.fetchStoriesByTerm('politics')} />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchStoriesByTerm }
)(Politics);
