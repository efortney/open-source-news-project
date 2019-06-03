import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import TopStories from './TopStories';
import Politics from './Politics';
import Technology from './Technology';
import Food from './Food';
import Money from './Money';
import Navigation from './Navigation';
import Footer from './Footer';
import { connect } from 'react-redux';

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
          <Route exact path="/" component={TopStories} />
          <Route exact path="/stories" component={TopStories} />
          <Route exact path="/politics" component={Politics} />
          <Route exact path="/technology" component={Technology} />
          <Route path="/food" component={Food} />
          <Route path="/money" component={Money} />
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    darkMode : state.darkMode
  };
}

export default connect(mapStateToProps)(App);
