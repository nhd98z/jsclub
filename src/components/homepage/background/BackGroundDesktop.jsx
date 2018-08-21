import React, { Component } from 'react';
import { connect } from 'react-redux';

// import backgroundDesktop_01 from '../../../img/background-01.png';
// import backgroundDesktop_02 from '../../../img/background-02.png';
import backgroundDesktop_03 from '../../../img/background-03.png';

class BackGroundDesktop extends Component {
  render() {
    // const getBg = () =>
    //   !this.props.isScroll ? (
    //     <img src={backgroundDesktop_01} alt="backgroundDesktop_01" style={{ width: '100%', marginTop: '0px' }} />
    //   ) : (
    //     <img src={backgroundDesktop_02} alt="backgroundDesktop_02" style={{ width: '100%', marginTop: '0px' }} />
    //   );

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
