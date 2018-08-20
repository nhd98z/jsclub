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
  const { mobile, scroll } = state;
  return {
    isMobile: mobile, isScroll: scroll
  };
}

export default connect(
  mapStateToProps,
  null
)(Kiki);
