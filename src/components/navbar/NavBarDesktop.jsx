import React, { Component } from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';

import logo from '../../img/logo.png';

class NavBarDesktop extends Component {
  render() {
    return (
      <div>
        <div style={{ height: '64px', background: '#000000' }} />
        <div className="navbar-wrap">
          <div className="navbar">
            <a className="navbar-e navbar-e-t" href="/">
              <img src={logo} alt="logo" style={{ height: '64px' }} />
            </a>
            <a href="/" className="navbar-e navbar-e-t">
              About Us
            </a>
            <a href="/" className="navbar-e navbar-e-t">
              Events
            </a>
            <a href="/" className="navbar-e navbar-e-t">
              Partners
            </a>
            <a href="/" className="navbar-e navbar-e-t">
              News
            </a>
            <a href="/" className="navbar-e navbar-e-t">
              <Icon type="global" style={{ fontSize: '14px' }} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  const { scroll } = state;
  return {
    isScroll: scroll
  };
}

export default connect(
  mapStateToProp,
  null
)(NavBarDesktop);
