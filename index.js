const express = require('express');
const app = express();
const myParser = require('body-parser');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(myParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// set static file routes here
app.use(express.static(__dirname + '/public'));

// newsapi routes
require('./controller/newsapi')(app);

app.get('/test', (req, res) => {
  console.log('hit')
  res.json({test: true});
});

const PORT = process.env.PORT || 5001;
app.listen(PORT);
