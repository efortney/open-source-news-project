import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStoriesByTerm } from '../actions';

import './styles/subCategory.css';

class SubCateogry extends Component {

  render(){
    return (
      <span style={{margin:'1.5px'}} onClick={() =>this.props.fetchStoriesByTerm(this.props.category)} className="badge badge-secondary">{this.props.category}</span>
    );
  }
} 

export default connect(
  null,
  { fetchStoriesByTerm }
)(SubCateogry);
