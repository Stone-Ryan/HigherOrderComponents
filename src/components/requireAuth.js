import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedCompnent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedCompnent {...this.props} />
    }
  }

  const mapStateToProps = state => ({
    authenticated: state.authenticated
  })

  return connect(mapStateToProps)(Authentication);
}
