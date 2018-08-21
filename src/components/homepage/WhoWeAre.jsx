import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import './whoweare.css';

class WhoWeAre extends Component {
  render() {
    const desktopDetail =
      'JS is a club founded with the idea of becoming a community for FU students who love Japanese and passionate about programming.';
    const mobileDetail = 'JS is a club founded with the idea of becoming a community for FU students.';
    const getDetail = () => (this.props.isMobile ? mobileDetail : desktopDetail);
    return (
      <div>
        <div className="whoweare">WHO WE ARE</div>
        <div className="whoweare-detail">{getDetail()}</div>
        <div className="whoweare" style={{ marginTop: '-4%' }}>
          <Button type="primary" href="/" size="large" style={{ background: '#3A5290', borderRadius: '20px' }}>
            View more
          </Button>
        </div>
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
