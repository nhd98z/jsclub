import React, { Component } from 'react';
import { connect } from 'react-redux';

import BackgroundMobile from './BackgroundMobile';
import BackGroundDesktop from './BackGroundDesktop';
import './background.css';

class BackGround extends Component {
  render() {
    return this.props.isMobile ? <BackgroundMobile /> : <BackGroundDesktop />;
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
)(BackGround);
