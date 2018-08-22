import React, { Component } from 'react';
import { connect } from 'react-redux';

import chairman from '../../img/chairman.jpg';

class AboutMobile extends Component {
  render() {
    const { i18n } = this.props;
    return (
      <div className="abt-mb-wrap">
        <div className="whoweare abt-mb-title">{i18n.whoweare}</div>
        <div className="abt-mb-avatar-wrap">
          <img className="abt-mb-avatar" src={chairman} alt="chairman" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { i18n } = state;
  return {
    i18n
  };
}

export default connect(
  mapStateToProps,
  null
)(AboutMobile);
