/**
 *
 */

import _ from 'lodash';

export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_STORIES':
      return {..._.mapKeys(action.payload, 'title') };
    default:
      return state;
  }
};
