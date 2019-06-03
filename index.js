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

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5001;
app.listen(PORT);
