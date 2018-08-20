import React, { Component } from 'react';
import { connect } from 'react-redux';

import FooterMobile from './FooterMobile';
import FooterDesktop from './FooterDesktop';
import './footer.css';

class Footer extends Component {
  render() {
    return this.props.isMobile ? <FooterMobile /> : <FooterDesktop />;
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
)(Footer);
