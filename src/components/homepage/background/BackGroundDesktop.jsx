import React, { Component } from 'react';
import { connect } from 'react-redux';

import backgroundDesktop_01 from '../../../img/background-01.png';
import backgroundDesktop_02 from '../../../img/background-02.png';

class BackGroundDesktop extends Component {
  render() {
    const getBg = () =>
      !this.props.isScroll ? (
        <img src={backgroundDesktop_01} alt="backgroundDesktop_01" style={{ width: '100%', marginTop: '64px' }} />
      ) : (
        <img src={backgroundDesktop_02} alt="backgroundDesktop_02" style={{ width: '100%', marginTop: '64px' }} />
      );
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
