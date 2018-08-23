import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import background_01 from '../../img/background-01.png';

import img1 from '../../img/helloworld.png';
import img2 from '../../img/jsgame.png';
import img3 from '../../img/hackathon-techkid.png';
import img4 from '../../img/ngaychiem.png';
import img5 from '../../img/banxoismile.jpg';
import img6 from '../../img/dawn.png';

class AboutDesktopIntroduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBackgroundScroll: false
    };
    // phải bind nó
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const bodyRect = document.body.getBoundingClientRect(),
      elemRect = document.getElementById('whoweare-organ-desktop').getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top;
    window.scrollTo(0, offset - 96);
    this.props.switchPage();
  }

  render() {
    const { i18n } = this.props;

    return (
      <div>
        <img style={{ width: '100%' }} src={background_01} alt="background_01" />
        <div className="abt-wrap">
          <div id="whoweare-organ-desktop" className="whoweare abt-mb-title">
            {i18n.storyUpper}
          </div>

          <div className="abt-detail">{i18n.aboutDetail01DesktopIntroduction}</div>
          <img className="abt-img" src={img1} alt="img1" />

          <div className="abt-detail">{i18n.aboutDetail02DesktopIntroduction}</div>
          <img className="abt-img" src={img2} alt="img2" />

          <div className="abt-detail">{i18n.aboutDetail03DesktopIntroduction}</div>
          <img className="abt-img" src={img3} alt="img3" />

          <div className="abt-detail">{i18n.aboutDetail04DesktopIntroduction}</div>
          <img className="abt-img" src={img4} alt="img4" />

          <div className="abt-detail">{i18n.aboutDetail05DesktopIntroduction}</div>
          <img className="abt-img" src={img5} alt="img5" />

          <div className="abt-detail">{i18n.aboutDetail06DesktopIntroduction}</div>
          <img className="abt-img" src={img6} alt="img6" />

          <div className="abt-detail">{i18n.aboutDetail07DesktopIntroduction}</div>
          <div className="abt-detail" style={{ fontWeight: '500' }}>
            {i18n.aboutDetail08DesktopIntroduction}
          </div>
          <div className="abt-detail abt-detail-last" style={{ fontWeight: 300, fontStyle: 'italic', textAlign: 'end', marginBottom: '10%' }}>
            {'#FromLinhCancerNguyenwith'}
            <span style={{ color: 'red' }}>❤</span>
          </div>
          <iframe
            style={{ margin: '-5% 0 5% 10%' }}
            title="video clb"
            width={window.innerWidth * 0.48}
            height={window.innerHeight * 0.48}
            src="https://www.youtube.com/embed/Tc21v8vbTXg"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <div style={{ marginBottom: '2%' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div>{i18n.wannaKnowAboutDepartment}</div>
              <Button
                className="btn-vmore"
                style={{ marginLeft: '5px', background: 'rgba(50, 50, 50, 0.8)' }}
                type="primary"
                onClick={this.handleClick}
                size="large"
              >
                {i18n.organization}
              </Button>
            </div>
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
)(AboutDesktopIntroduction);
