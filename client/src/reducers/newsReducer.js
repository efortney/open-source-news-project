/**
 *
 */
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TOP_STORIES':
      return console.log(state);
    default:
      return state;
  }
};
