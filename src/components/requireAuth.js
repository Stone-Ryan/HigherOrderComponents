import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedCompnent) {
  class Authentication extends Component {
    render() {
      return <ComposedCompnent {...this.props} />
    }
  }

  const mapStateToProps = state => ({
    authenticated: state.authenticated
  })

  return connect(mapStateToProps)(Authentication);
}
