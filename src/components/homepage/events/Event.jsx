import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventMobile from './EventMobile';
import EventDesktop from './EventDesktop';

class Event extends Component {
  render() {
    const { i18n } = this.props;

    const getEv = () => (this.props.isMobile ? <EventMobile /> : <EventDesktop />);

    return (
      <div style={{ width: '100%' }}>
        <div className="whoweare ean">{i18n.eventsUpperCase}</div>
        {getEv()}
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
)(Event);
