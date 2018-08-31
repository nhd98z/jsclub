import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScrollHint from './ScrollHint';
import backgroundMobile_01 from '../../img/background-01-mobile.png';

import img1 from '../../img/helloworld.png';
import img2 from '../../img/jsgame.png';
import img3 from '../../img/hackathon-techkid.png';
import img4 from '../../img/ngaychiem.png';
import img5 from '../../img/banxoismile.png';
import img6 from '../../img/dawn.png';

class AboutMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBackgroundScroll: false
    };
    // phải bind nó
    this.handleBackgroundScroll = this.handleBackgroundScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleBackgroundScroll() {
    const div = document.getElementById('scrollcenter-intro');
    if (div && div.scrollLeft > 200) this.setState({ isBackgroundScroll: true });
  }

  handleClick() {
    const bodyRect = document.body.getBoundingClientRect(),
      elemRect = document.getElementById('whoweare-mb-intro').getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top;
    window.scrollTo(0, offset - 48);
    this.props.switchPage();
  }

  render() {
    const { i18n } = this.props;

    return (
      <div>
        <div className="bg-mobile-clb" id="scrollcenter-intro" onScroll={this.handleBackgroundScroll}>
          <img className="bg-mobile-clb-img" src={backgroundMobile_01} alt="backgroundMobile_01" />
          {this.state.isBackgroundScroll === false && <ScrollHint />}
        </div>

        <div className="abt-mb-wrap">
          <div id="whoweare-mb-intro" className="whoweare">
            {i18n.storyUpper}
          </div>

          <div className="abt-mb-detail">{i18n.aboutDetail01MobileIntroduction}</div>
          <img className="abt-mb-img" src={img1} alt="img1" />

          <div className="abt-mb-detail">{i18n.aboutDetail02MobileIntroduction}</div>
          <img className="abt-mb-img" src={img2} alt="img2" />

          <div className="abt-mb-detail">{i18n.aboutDetail03MobileIntroduction}</div>
          <img className="abt-mb-img" src={img3} alt="img3" />

          <div className="abt-mb-detail">{i18n.aboutDetail04MobileIntroduction}</div>
          <img className="abt-mb-img" src={img4} alt="img4" />

          <div className="abt-mb-detail">{i18n.aboutDetail05MobileIntroduction}</div>
          <img className="abt-mb-img" src={img5} alt="img5" />

          <div className="abt-mb-detail">{i18n.aboutDetail06MobileIntroduction}</div>
          <img className="abt-mb-img" src={img6} alt="img6" />

          <div className="abt-mb-detail">{i18n.aboutDetail07MobileIntroduction}</div>
          <div className="abt-mb-detail" style={{ fontWeight: '500' }}>
            {i18n.aboutDetail08MobileIntroduction}
          </div>
          <div className="abt-mb-detail abt-mb-detail-last" style={{ fontWeight: 300, fontStyle: 'italic', textAlign: 'end', marginBottom: '10%' }}>
            {'#FromLinhCancerNguyenwith'}
            <span style={{ color: 'red' }}>❤</span>
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
)(AboutMobile);
