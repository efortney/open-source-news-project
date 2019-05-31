const apiKey = require('../../config').newsapi;
module.exports = (app, axios, newsApi) => {
  /**
   * ## gather all top stories
   * @method get/topstories
   * returns a json array of the top stories
   */
  app.get('/topstories', async (req, res) => {
    let data = await axios({
      method: 'GET',
      url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    }).then((data) => {
      newsApi.gatherStories(data.data.articles, res);
    }).catch((err) => {
      console.error(err);
      res.redirect('/topstories');
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
   * @method get/searach/story
   * returns a json array of news story objects
   */
  app.get('/search/:story', async (req, res) => {
    let term = req.params.story;
    let data = await axios({
      method: 'GET',
      url: `https://newsapi.org/v2/everything?q=${term}&apiKey=${apiKey}`
    }).then((data) => {
      if(data.data.articles.length > 0){
        newsApi.gatherStories(data.data.articles, res);
      } else {
        res.redirect('/topstories')
      }
    }).catch((err) => {
      console.error(err);
      res.redirect('/topstories');
    });
  });
};
