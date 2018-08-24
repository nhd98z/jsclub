import React, { Component } from 'react';
import { connect } from 'react-redux';

import multicolor from '../../img/multicolor.png';
import ci from '../../img/ci-avatar.jpg';
import hackathon from '../../img/hackathon-avatar.jpg';
import cp from '../../img/cp-avatar.png';
import prom from '../../img/prom-avatar.jpg';
import tb from '../../img/tb-avatar.jpg';

class EventsDesktop extends Component {
  clicked = false;

  componentDidMount() {
    // first time dance
    this.handleClick();
  }

  handleClick() {
    const hackathon = document.getElementsByClassName('hackathon-avt-mobile');
    const ci = document.getElementsByClassName('ci-avt-mobile');
    const cp = document.getElementsByClassName('cp-avt-mobile');
    const prom = document.getElementsByClassName('prom-avt-mobile');
    const tb = document.getElementsByClassName('tb-avt-mobile');

    const hackathonText = document.getElementsByClassName('hackathon-txt-mobile');
    const ciText = document.getElementsByClassName('ci-txt-mobile');
    const cpText = document.getElementsByClassName('cp-txt-mobile');
    const promText = document.getElementsByClassName('prom-txt-mobile');
    const tbText = document.getElementsByClassName('tb-txt-mobile');

    if (!this.clicked) {
      [].forEach.call(hackathon, value => value.classList.toggle('l-dance'));
      [].forEach.call(ci, value => value.classList.toggle('r-dance'));
      [].forEach.call(cp, value => value.classList.toggle('l-dance'));
      [].forEach.call(prom, value => value.classList.toggle('r-dance'));
      [].forEach.call(tb, value => value.classList.toggle('l-dance'));

      [].forEach.call(hackathonText, value => value.classList.toggle('u-dance'));
      [].forEach.call(ciText, value => value.classList.toggle('u-dance'));
      [].forEach.call(cpText, value => value.classList.toggle('u-dance'));
      [].forEach.call(promText, value => value.classList.toggle('u-dance'));
      [].forEach.call(tbText, value => value.classList.toggle('u-dance'));

      this.clicked = true;
    } else {
      [].forEach.call(hackathon, value => value.classList.remove('l-dance'));
      [].forEach.call(ci, value => value.classList.remove('r-dance'));
      [].forEach.call(cp, value => value.classList.remove('l-dance'));
      [].forEach.call(prom, value => value.classList.remove('r-dance'));
      [].forEach.call(tb, value => value.classList.remove('l-dance'));

      [].forEach.call(hackathonText, value => value.classList.remove('u-dance'));
      [].forEach.call(ciText, value => value.classList.remove('u-dance'));
      [].forEach.call(cpText, value => value.classList.remove('u-dance'));
      [].forEach.call(promText, value => value.classList.remove('u-dance'));
      [].forEach.call(tbText, value => value.classList.remove('u-dance'));

      this.clicked = false;
    }
  }

  render() {
    const { i18n } = this.props;

    return (
      <div>
        <div style={{ margin: '0 10%', width: '80%' }}>
          <h1 className="h1-center-mobile">{i18n.eventsUpperCase}</h1>
          <h2 className="h2-center-mobile">{i18n.eventIntroductionMobile}</h2>
        </div>
        <div style={{ position: 'relative' }}>
          <img src={multicolor} alt="multicolor" style={{ width: '100%' }} />

          <img src={hackathon} alt="hackathon" className="avt-mobile hackathon-avt-mobile" />
          <img src={ci} alt="ci" className="avt-mobile ci-avt-mobile" />
          <img src={cp} alt="cp" className="avt-mobile cp-avt-mobile" />
          <img src={prom} alt="prom" className="avt-mobile prom-avt-mobile" />
          <img src={tb} alt="tb" className="avt-mobile tb-avt-mobile" />

          <div className="avt-txt-mobile hackathon-txt-mobile">{i18n.hackathonMobile}</div>
          <div className="avt-txt-mobile ci-txt-mobile">{i18n.ciMobile}</div>
          <div className="avt-txt-mobile cp-txt-mobile">{i18n.cpMobile}</div>
          <div className="avt-txt-mobile prom-txt-mobile">{i18n.promMobile}</div>
          <div className="avt-txt-mobile tb-txt-mobile">{i18n.tbMobile}</div>

          <div className="avt-title-mobile hackathon-title-mobile">
            <h3>{i18n.hackathon}</h3>
          </div>
          <div className="avt-title-mobile ci-title-mobile">
            <h3>{i18n.ci}</h3>
          </div>
          <div className="avt-title-mobile cp-title-mobile">
            <h3>{i18n.cp}</h3>
          </div>
          <div className="avt-title-mobile prom-title-mobile">
            <h3>{i18n.prom}</h3>
          </div>
          <div className="avt-title-mobile tb-title-mobile">
            <h3>{i18n.tb}</h3>
          </div>
        </div>

        <div
          style={{
            position: 'fixed',
            zIndex: '999',
            top: '68px',
            right: '20px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'rgba(231, 76, 60, 0.8)',
            color: '#ffffff',
            fontSize: '11px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onClick={() => this.handleClick()}
        >
          Dance
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { i18n, scrollFlexible } = state;
  return {
    i18n,
    isScrollFlexible: scrollFlexible
  };
}

export default connect(
  mapStateToProps,
  null
)(EventsDesktop);
