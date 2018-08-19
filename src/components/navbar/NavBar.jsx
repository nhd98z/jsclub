import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBarMobile from './NavBarMobile';
import NavBarDesktop from './NavBarDesktop';
import './navbar.css';

class NavBar extends Component {
  render() {
    return this.props.isMobile ? <NavBarMobile /> : <NavBarDesktop />;
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
)(NavBar);
