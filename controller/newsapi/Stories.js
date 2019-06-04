const apiKey = require('../../config').newsapi;
module.exports = (app, axios, newsApi) => {
  /**
   * ## gather all top stories
   * @method get/topstories
   * returns a json array of the top stories
   */
  app.get('/topstories', async (req, res) => {
    await axios({
      method: 'GET',
      url: `https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&pageSize=100&apiKey=${apiKey}`
    })
      .then(data => {
        newsApi.gatherStories(data.data.articles, res);
      })
      .catch(err => {
        console.error(err);
        res.redirect('/api/topstories');
      });
  });

  /**
   * ## Search stories
   * @method post/search/submit
   * submits form to the /search endpoint
   */
  app.post('/search/submit', (req, res) => {
    let term = req.body.term;
    res.redirect('/search/' + term);
  });

  /**
   * ## Retrieve stories based on a query string
   * @method get/search/story
   * returns a json array of news story objects
   */
  app.get('/search/:story', async (req, res) => {
    let term = req.params.story;
    await axios({
      method: 'GET',
      url: `https://newsapi.org/v2/everything?q=${term}&language=en&sortBy=relevancy&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`
    })
      .then(data => {
        if (data.data.articles.length > 0) {
          newsApi.gatherStories(data.data.articles, res);
        } else {
          res.redirect('/topstories');
        }
      })
      .catch(err => {
        console.error(err);
        res.redirect('/topstories');
      });
  });
};
