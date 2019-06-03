import React, { Component } from 'react';
import SubCategory from './SubCategory';

class CategoryHeading extends Component {

  renderHeadings() {
    if(this.props.headings) {
      return this.props.headings.map( heading => {
        return <SubCategory key={heading} category={heading}/>
      });
    } return (
      <div></div>
    )
  }

  render() {
    return (
      <div style={{backgroundColor: this.props.color, color : this.props.text}} className="container text-center jumbotron">
        <h2 className="display-2"> {this.props.category} </h2>
        <p className="lead">Featuring stories about </p>
        {this.renderHeadings()}
      </div>
    );
  }
}

export default CategoryHeading;
