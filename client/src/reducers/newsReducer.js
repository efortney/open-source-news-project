/**
 *
 */

import _ from 'lodash';

export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_STORIES':
      return { ...state, ..._.mapKeys(action.payload, 'title') };
    default:
      return state;
  }
};
