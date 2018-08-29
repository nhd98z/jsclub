import React, { Component } from 'react';
import { connect } from 'react-redux';

class EventsDesktop extends Component {
  render() {
    // const { i18n } = this.props;
    return (
      <div className="event-desktop-container">
        <h1>EventsDesktop</h1>
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
)(EventsDesktop);
