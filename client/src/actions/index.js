import news from '../apis/news';

/**
 * ## fetchTopStories
 * @param none
 * @returns Makes an api request to the backend, where we will populate a list of the top stories.
 */
export const fetchTopStories = () => async dispatch => {
  await news
    .get('/topstories')
    .then(data => {
      dispatch({ type: 'FETCH_TOP_STORIES', payload: data });
    })
    .catch(err => {
      console.error(err);
    });
};
