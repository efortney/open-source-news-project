import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchForm extends Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  renderInput = ({ input }) => {
    return (
      <div type="search">
        <input className="form-control mr-sm-2" placeholder="search" {...input} />
      </div>
    );
  };

  render() {
    return (
      <form
        autoComplete="off"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="form-inline "
      >
        <Field name="term" component={this.renderInput} />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default reduxForm({ form: 'searchForm' })(SearchForm);
