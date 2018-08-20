import React, { Component } from 'react';
import { connect } from 'react-redux';

import './whoweare.css';

class WhoWeAre extends Component {
  render() {
    const desktopDetail =
      'JS is a club founded with the idea of becoming a community for FU students who love Japanese and passionate about programming.';
    const mobileDetail = 'JS is a club founded with the idea of becoming a community for FU students.';
    const getDetail = () => (this.props.isMobile ? mobileDetail : desktopDetail);
    return (
      <div>
        <div className="whoweare">WHO WE ARE ?</div>
        <div className="whoweare-detail">{getDetail()}</div>
      </div>
    );
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
)(WhoWeAre);
