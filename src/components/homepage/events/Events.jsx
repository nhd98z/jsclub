import React, { Component } from 'react';
import { connect } from 'react-redux';

import Mobile from './EventsMobile';
import Desktop from './EventsDesktop';
import './events.css';

class Events extends Component {
  render() {
    return (
      <div>
        {this.props.isMobile ? <Mobile /> : <Desktop />}
        <hr style={{ margin: '5% 10% 0 10%', border: '0', borderTop: '1px solid #ecf0f1' }} />
      </div>
    );
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
)(Events);
