import React, { Component } from 'react';
import { connect } from 'react-redux';

import KikiMobile from './KikiMobile';
import KikiDesktop from './KikiDesktop';

class Kiki extends Component {
  render() {
    return this.props.isMobile ? <KikiMobile /> : <KikiDesktop />;
  }
}

function mapStateToProps(state) {
  const { mobile } = state;
  return {
    isMobile: mobile
  };
}

export default connect(
  mapStateToProps,
  null
)(Kiki);
