import React, { Component } from 'react';
import { connect } from 'react-redux';

import multicolor from '../../img/multicolor-nobox.png';
import ci from '../../img/ci-avatar.jpg';
import hackathon from '../../img/hackathon-avatar.jpg';
import cp from '../../img/cp-avatar.png';
import prom from '../../img/prom-avatar.jpg';
import tb from '../../img/tb-avatar.jpg';

class EventsDesktop extends Component {
  render() {
    const { i18n } = this.props;
    return (
      <div>
        <div style={{ margin: '0 10%', width: '80%' }}>
          <h1 className="h1-center-mobile">{i18n.eventsUpperCase}</h1>
          <h2 className="h2-center-mobile">The quick brown fox jumps over the lazy dog.</h2>
        </div>
        <div style={{ position: 'relative' }}>
          <img src={multicolor} alt="multicolor" style={{ width: '100%' }} />

          <img src={hackathon} alt="hackathon" className="avt-mobile hackathon-avt-mobile" />
          <img src={ci} alt="ci" className="avt-mobile ci-avt-mobile" />
          <img src={cp} alt="cp" className="avt-mobile cp-avt-mobile" />
          <img src={prom} alt="prom" className="avt-mobile prom-avt-mobile" />
          <img src={tb} alt="tb" className="avt-mobile tb-avt-mobile" />

          <div className="avt-txt-mobile hackathon-txt-mobile">The quick brown fox jumps over the lazy dog.</div>
          <div className="avt-txt-mobile ci-txt-mobile">The quick brown fox jumps over the lazy dog.</div>
          <div className="avt-txt-mobile cp-txt-mobile">The quick brown fox jumps over the lazy dog.</div>
          <div className="avt-txt-mobile prom-txt-mobile">The quick brown fox jumps over the lazy dog.</div>
          <div className="avt-txt-mobile tb-txt-mobile">The quick brown fox jumps over the lazy dog.</div>

          <div className="avt-title-mobile hackathon-title-mobile">Title</div>
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
)(EventsDesktop);
