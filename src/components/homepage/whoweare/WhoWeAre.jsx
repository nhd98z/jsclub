import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import './whoweare.css';

class WhoWeAre extends Component {
  render() {
    const { i18n } = this.props;
    const getDetail = () => (this.props.isMobile ? i18n.whoweareShortDetail : i18n.whoweareLongDetail);
    return (
      <div>
        <div className="whoweare">{i18n.whoweare}</div>
        <div className="whoweare-detail">{getDetail()}</div>
        <div className="whoweare" style={{ marginTop: '-4%' }}>
          <Button className="btn-vmore" type="primary" href="/about" size="large">
            {i18n.viewmore}
          </Button>
        </div>
        <hr style={{ margin: '5% 10% 0 10%', border: '0', borderTop: '1px solid #ecf0f1' }} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { mobile, i18n } = state;
  return {
    isMobile: mobile,
    i18n
  };
}

export default connect(
  mapStateToProps,
  null
)(WhoWeAre);
