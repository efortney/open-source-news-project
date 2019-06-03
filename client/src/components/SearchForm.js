import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchForm extends Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  renderInput = ({ input }) => {
    return (
      <div type="search" placeholder="wallabees" className="form-control mr-sm-2">
        <input {...input} />
      </div>
    );
  };

  render() {
    return (
      <form
        autoComplete="off"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="form-inline my-2 my-lg-0"
      >
        <Field
          className="form-control mr-sm-2"
          name="term"
          component={this.renderInput}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default reduxForm({ form: 'searchForm'})(SearchForm);
