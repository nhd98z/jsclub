import React, { Component } from 'react';
import { connect } from 'react-redux';

class EventsDesktop extends Component {
  render() {
    const { i18n } = this.props;
    return (
      <div style={{ margin: '0 10%', width: '80%' }}>
        <h1 className="h1-center-mobile">
          {i18n.eventsUpperCase}
        </h1>
        <h2 className="h2-center-mobile">Cái đéo gì đó ở đây</h2>
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
