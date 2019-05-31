const axios = require('axios');
const newsApi = require('../../helpers');
/**
 * newsapi controller
 */
module.exports = app => {
  require('./Categories')(app, axios, newsApi);
  require('./Sources')(app, axios, newsApi);
  require('./Stories')(app, axios, newsApi);
};
