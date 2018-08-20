import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventMobile from './EventMobile';
import EventDesktop from './EventDesktop';

class Event extends Component {
  render() {
    const getEv = () => (this.props.isMobile ? <EventMobile /> : <EventDesktop />);

    return (
      <div>
        <div className="ean">EVENTS</div>
        {getEv()}
      </div>
    );
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
