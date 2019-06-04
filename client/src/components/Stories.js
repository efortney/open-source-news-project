import React, { Component } from 'react';
import { connect } from 'react-redux';

import StoryCard from './StoryCard';
import './styles/cards.css';

class Stories extends Component {
  componentDidMount() {
    this.props.load();
  }

  renderStories() {
    return this.props.stories.map(story => {
      return <StoryCard key={story.title} story={story} />;
    });
  }

  render() {
    return (
      <div className="container">
        <div className='card-columns'>
        {this.renderStories()}
        </div>
        <p className='text-muted'> Powered by NewsAPI.org </p>
      </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    stories: Object.values(state.stories)
  };
};

export default connect(
  mapStateToProps, null
)(Stories);
