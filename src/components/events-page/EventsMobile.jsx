import React, { Component } from 'react';
import { connect } from 'react-redux';

import multicolor from '../../img/multicolor.png';
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
          <h2 className="h2-center-mobile">Cái đéo gì đó ở đây</h2>
        </div>
        <div style={{ position: 'relative' }}>
          <img src={multicolor} alt="multicolor" style={{ width: '100%' }} />

          <img src={hackathon} alt="hackathon" className="avt-mobile hackathon-avt-mobile" />
          <div className="avt-txt-mobile hackathon-txt-mobile">
            <div>Cái đéo gì đó ở đây</div>
          </div>

          <img src={cp} alt="cp" className="avt-mobile cp-avt-mobile" />
          <div className="avt-txt-mobile cp-txt-mobile">
            <div>Cái đéo gì đó ở đây</div>
          </div>

          <img src={tb} alt="tb" className="avt-mobile tb-avt-mobile" />
          <div className="avt-txt-mobile tb-txt-mobile">
            <div>Cái đéo gì đó ở đây</div>
          </div>

          <img src={ci} alt="ci" className="avt-mobile ci-avt-mobile" />
          <div className="avt-txt-mobile ci-txt-mobile">
            <div>Cái đéo gì đó ở đây</div>
          </div>

          <img src={prom} alt="prom" className="avt-mobile prom-avt-mobile" />
          <div className="avt-txt-mobile prom-txt-mobile">
            <div>Cái đéo gì đó ở đây</div>
          </div>
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
