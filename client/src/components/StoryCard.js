/**
 * StoryCard class.
 * A story card may be used to represent any news story
 * that is displaying information in a tight, uniform layout
 *
 */
import React, { Component } from 'react';

class StoryCard extends Component {
  render() {
    return (
      <div className="card hoverable" style={{ marginTop: '12px' }}>
        <img
          className="card-img-top"
          src={this.props.story.urlToImage}
          alt={this.props.story.source.name}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.story.title}</h5>
          <p className="card-text">{this.props.story.description}</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={this.props.story.url}
            className="btn btn-block btn-raised btn-info"
          >
            Read Story
          </a>
        </div>
        <div className="card-footer">
          <small className="text-muted">{this.props.story.source.name}</small>
        </div>
      </div>
    );
  }
}

export default StoryCard;
