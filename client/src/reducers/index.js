import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import newsReducer from './newsReducer';

export default combineReducers({
  news: newsReducer,
  form: formReducer
});
