import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import './whoweare.css';

class WhoWeAre extends Component {
  render() {
    const { i18n } = this.props;
    return (
      <div>
        <div className="whoweare">{i18n.whoweare}</div>
        <div className="whoweare-detail">{this.props.isMobile ? i18n.whoweareShortDetail : i18n.whoweareLongDetail}</div>
        <div className="whoweare" style={{ marginTop: '-4%' }}>
          <Link to="/about">
            <Button className="btn-vmore" type="primary" size="large">
              {i18n.viewmore}
            </Button>
          </Link>
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
