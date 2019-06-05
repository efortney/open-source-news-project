import React from 'react';
import { connect } from 'react-redux';
import { fetchStoriesByCategory } from '../../actions';

import CategoryHeading from '../CategoryHeading';
import Stories from '../Stories';

class Politics extends React.Component {
  render() {
    return (
      <div>
        <CategoryHeading color='#9b59b6' text='white' category='Politics' headings={['donald trump','foreign affairs','economy','public relations']}/>
        <Stories load={() => this.props.fetchStoriesByCategory('politics')} />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchStoriesByCategory }
)(Politics);
