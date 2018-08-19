import React, { Component } from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';

import logo from '../../img/logo.png';

class NavBarDesktop extends Component {
  render() {
    const getLogoDot = () => (this.props.isScroll ? <img src={logo} alt="logo" style={{ height: '48px' }} /> : <div />);
    return (
      <div className="navbar-wrap">
        <div className="navbar">
          <a className="navbar-e navbar-e-t" href="/">
            {getLogoDot()}
          </a>
          <a href="/" className="navbar-e navbar-e-t">
            About Us
          </a>
          <a href="/" className="navbar-e navbar-e-t">
            Programs
          </a>
          <a href="/" className="navbar-e navbar-e-t">
            Partners
          </a>
          <a href="/" className="navbar-e navbar-e-t">
            News
          </a>
          <a href="/" className="navbar-e navbar-e-t">
            <Icon type="search" style={{ fontSize: '14px' }} />
          </a>
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
