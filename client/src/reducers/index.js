import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import newsReducer from './newsReducer';
import themeReducer from './themeReducer';

export default combineReducers({
  stories: newsReducer,
  darkMode: themeReducer,
  form: formReducer
});
