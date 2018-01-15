import React, { Component } from 'react';

export default function(ComposedCompnent) {
  class Authentication extends Component {
    render() {
      return <ComposedCompnent {...this.props} />
    }
  }

  return Authentication;
}
