import React, { Component } from 'react';
import { connect } from 'react-redux';

import backgroundDesktop_03 from '../../../img/background-03.png';

class BackGroundDesktop extends Component {
  render() {
    const getBg = () => <img src={backgroundDesktop_03} alt="backgroundDesktop_03" style={{ width: '100%', marginTop: '0px' }} />;
    return <div>{getBg()}</div>;
  }
}

function mapStateToProps(state) {
  const { mobile, scroll } = state;
  return {
    isMobile: mobile,
    isScroll: scroll
  };
}

export default connect(
  mapStateToProps,
  null
)(BackGroundDesktop);
