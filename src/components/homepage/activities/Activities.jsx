import React, { Component } from 'react';
import { connect } from 'react-redux';

import ActivitiesMobile from './ActivitiesMobile';
import ActivitiesDesktop from './ActivitiesDesktop';

class Activities extends Component {
  render() {
    const { i18n } = this.props;

    return (
      <div style={{ width: '100%' }}>
        <div className="whoweare ean">{i18n.activitiesUpperCase}</div>
        {this.props.isMobile ? <ActivitiesMobile /> : <ActivitiesDesktop />}
        <hr style={{ margin: '0% 10% 5% 10%', border: '0', borderTop: '1px solid #ecf0f1' }} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { mobile, scroll, i18n } = state;
  return {
    isMobile: mobile,
    isScroll: scroll,
    i18n
  };
}

export default connect(
  mapStateToProps,
  null
)(Activities);
