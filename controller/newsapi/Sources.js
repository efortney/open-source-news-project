const apiKey = require('../../config').newsapi;

module.exports = (app, axios, newsApi) => {
  /**
   * ## Search sources
   * @method post/sources/submit
   * submits form to the /search/sources endpoint
   */
  app.post('/sources/submit', (req, res) => {
    let term = req.body.term;
    res.redirect('/search/sources/' + term);
  });
  /**
   * returns a json object containing stories from a news source
   */
  app.get('/search/sources/:source', async (req, res) => {
    let term = req.params.source;
    let data = await axios({
      method: 'GET',
      url: `https://newsapi.org/v2/everything?sources=${term}&language=en&apiKey=${apiKey}`
    }).then((data) => {
      if(data.data.articles.length > 0){
        newsApi.gatherSourceStories(data.data.articles, res);
      } else {
        res.redirect('/sources')
      }
    }).catch((err) => {
      res.redirect('/sources');
    });
  });

  /**
   * ## Return all news sources
   * returns a json array of news source objects
   */
  app.get('/sources', async (req, res) => {
    let data = await axios({
      method: 'GET',
      url: `https://newsapi.org/v2/sources?language=en&apiKey=${apiKey}`
    });
    newsApi.gatherSources(data.data.sources, res);
  });
};
