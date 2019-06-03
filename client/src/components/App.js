import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Stories from './Stories';
import Sources from './Sources';
import About from './About';
import Navigation from './Navigation';

/**
 * Home page of the client side. This is where routing will occur. 
 * We are using redux and redux thunk to manage our state.
 * Browser router is deployed here to manage app navigation
 */
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <div>
          <Route exact path="/" component={Stories} />
          <Route exact path="/stories" component={Stories} />
          <Route exact path="/sources" component={Sources} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
