import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopStories } from '../actions/';

class Stories extends Component {
  componentDidMount() {
    this.props.fetchTopStories();
  }

  render() {
    return <div>Stories</div>;
  }
}

const mapStateToProps = state => {};

export default connect(
  null,
  { fetchTopStories }
)(Stories);
