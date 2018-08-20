import React, { Component } from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';

import logo from '../../img/logo.png';

class NavBarMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openBar: false
    };
  }

  handleClick() {
    const openBar = !this.state.openBar;
    this.setState({ openBar });
  }

  render() {
    const bar = () =>
      this.state.openBar ? (
        <div>
          <ul className="navbar-ul">
            <li className="navbar-li">
              <a href="/">About us</a>
            </li>
            <li className="navbar-li">
              <a href="/">Programs</a>
            </li>
            <li className="navbar-li">
              <a href="/">Partners</a>
            </li>
            <li className="navbar-li navbar-li-last">
              <a href="/">News</a>
            </li>
          </ul>
        </div>
      ) : (
        <div />
      );
    const menuIcon = () => (this.state.openBar ? 'menu-unfold' : 'menu-fold');
    const getLogoDot = () => (this.props.isScroll ? <img src={logo} alt="logo" style={{ height: '48px' }} /> : <div />);
    return (
      <div className="navbar-wrap">
        <div className="navbar">
          <span className="navbar-e">
            <Icon type={menuIcon()} style={{ fontSize: '24px' }} onClick={() => this.handleClick()} />
          </span>
          <span className="navbar-e">
            <a href="/">{getLogoDot()}</a>
          </span>
          <span className="navbar-e">
            <Icon type="global" style={{ fontSize: '24px' }} />
          </span>
        </div>
        {bar()}
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
)(NavBarMobile);
