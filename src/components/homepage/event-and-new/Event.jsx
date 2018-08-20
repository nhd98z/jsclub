import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventMobile from './EventMobile';
import EventDesktop from './EventDesktop';

class Event extends Component {
  render() {
    return this.props.isMobile ? <EventMobile /> : <EventDesktop />;
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
)(Event);
