import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventMobile from './EventMobile';
import EventDesktop from './EventDesktop';

class Event extends Component {
  render() {
    const { i18n } = this.props; 

    const getEv = () => (this.props.isMobile ? <EventMobile /> : <EventDesktop />);

    return (
      <div>
        <div className="ean">{i18n.eventsUpperCase}</div>
        {getEv()}
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
