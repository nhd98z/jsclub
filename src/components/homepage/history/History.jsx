import React, { Component } from 'react';
import { connect } from 'react-redux';

import './history.css';
import HistoryDesktop from './HistoryDesktop';
import HistoryMobile from './HistoryMobile';

class History extends Component {
  render() {
    return this.props.isMobile ? <HistoryMobile /> : <HistoryDesktop />;
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
)(History);
