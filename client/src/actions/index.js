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
      dispatch({ type: 'FETCH_STORIES', payload: data.data });
    })
    .catch(err => {
      console.error(err);
    });
};

export const searchStories = formValues => async dispatch => {
  await news
    .get(`search/${formValues.term}`)
    .then(data => {
      dispatch({ type: 'FETCH_STORIES', payload: data.data });
    })
    .catch(err => {
      console.error(err);
    });
};

export const fetchStoriesByTerm = term => async dispatch => {
  await news
    .get(`search/${term}`)
    .then(data => {
      dispatch({ type: 'FETCH_STORIES', payload: data.data });
    })
    .catch(err => {
      console.error(err);
    });
};

export const darkModeOn = () => dispatch => {
  dispatch({
    type: 'DARK_MODE_ON'
  });
};

export const darkModeOff = () => dispatch => {
  dispatch({
    type: 'DARK_MODE_OFF'
  });
};
