const apiKey = require('../../config').newsapi;

module.exports = (app, axios, newsApi) => {
  app.get('/categories/:term', async (req, res) => {
    let term = req.params.term;
    let data = await axios({
      method: 'GET',
      url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&category=${term}`
    });
    newsApi.gatherStories(data.data.articles, res);
  });
  app.get('/categories/submit', (req, res) => {
    let term = req.body.term;
    res.redirect('/categories/' + term);
  });
};
