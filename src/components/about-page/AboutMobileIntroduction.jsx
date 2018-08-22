import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import ScrollHint from '../homepage/background/ScrollHint';
import backgroundMobile_01 from '../../img/background-01-mobile.png';

import img1 from '../../img/helloworld.png';
import img2 from '../../img/jsgame.png';
import img3 from '../../img/hackathon-techkid.png';
import img4 from '../../img/ngaychiem.png';
import img5 from '../../img/ean-05.png';
import img6 from '../../img/dawn.png';

class AboutMobileIntroduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBackgroundScroll: false
    };
    // phải bind nó
    this.handleBackgroundScroll = this.handleBackgroundScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.handleBackgroundScroll, 200);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleBackgroundScroll() {
    const div = document.getElementById('scrollCenter');
    if (div) {
      // why this shit need to be wrapped by setTimeout, please?
      setTimeout(() => {
        if (div.scrollLeft > 200) this.setState({ isBackgroundScroll: true });
      }, 0);
    }
  }

  handleClick() {
    const bodyRect = document.body.getBoundingClientRect(),
      elemRect = document.getElementById('whoweare').getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top;
    window.scrollTo(0, offset - 48);
    this.props.switchPage();
  }

  render() {
    const getHint = () => (!this.state.isBackgroundScroll ? <ScrollHint /> : <div />);

    const getBg = () => (
      <div className="bg-mobile-clb" id="scrollCenter">
        <img className="bg-mobile-clb-img" src={backgroundMobile_01} alt="backgroundMobile_01" />
        {getHint()}
      </div>
    );

    const { i18n } = this.props;

    return (
      <div>
        {getBg()}
        <div className="abt-mb-wrap">
          <div id="whoweare" className="whoweare abt-mb-title">
            {i18n.storyUpper}
          </div>
          {/* <div className="abt-mb-avatar-wrap">
          <img className="abt-mb-avatar" src={chairman} alt="chairman" />
        </div> */}
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
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              className="btn-vmore"
              style={{ marginBottom: '10%', background: 'rgba(50, 50, 50, 0.8)' }}
              type="primary"
              onClick={this.handleClick}
              size="large"
            >
              {i18n.organization}
            </Button>
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
)(AboutMobileIntroduction);
