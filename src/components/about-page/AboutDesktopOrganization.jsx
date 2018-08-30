import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import background_01 from '../../img/background-01.png';

import img1 from '../../img/organ1.jpg';
import img2 from '../../img/organ2.jpg';
import img3 from '../../img/organ3.jpg';
import img4 from '../../img/organ4.jpg';
import img5 from '../../img/organ5.jpg';
import img6 from '../../img/organ6.jpg';

class AboutDesktopOrganization extends Component {
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
      elemRect = document.getElementById('whoweare-intro-desktop').getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top;
    window.scrollTo(0, offset - 96);
    this.props.switchPage();
  }

  render() {
    const { i18n } = this.props;

    return <div>
        <img style={{ width: '100%' }} src={background_01} alt="background_01" />
        <div className="abt-wrap">
          <div id="whoweare-intro-desktop" className="whoweare">
            {i18n.organizationUpper}
          </div>

          <div className="person-wrap">
            <img className="abt-img-organ" src={img1} alt="img1" />
            <div className="abt-detail-organ" style={{ fontWeight: '500' }}>
              {i18n.aboutDetail01DesktopOrganization}
            </div>
          </div>

          <div className="person-wrap">
            <div className="abt-detail-organ">{i18n.aboutDetail02DesktopOrganization}</div>
            <img className="abt-img-organ" src={img2} alt="img2" />
          </div>

          <div className="person-wrap">
            <img className="abt-img-organ" src={img3} alt="img3" />
            <div className="abt-detail-organ">{i18n.aboutDetail03DesktopOrganization}</div>
          </div>

          <div className="person-wrap">
            <div className="abt-detail-organ">{i18n.aboutDetail04DesktopOrganization}</div>
            <img className="abt-img-organ" src={img4} alt="img4" />
          </div>

          <div className="person-wrap">
            <img className="abt-img-organ" src={img5} alt="img5" />
            <div className="abt-detail-organ">{i18n.aboutDetail05DesktopOrganization}</div>
          </div>

          <div className="person-wrap">
            <div className="abt-detail-organ">{i18n.aboutDetail06DesktopOrganization}</div>
            <img className="abt-img-organ" src={img6} alt="img6" />
          </div>

          <div style={{ margin: '5% 0 2% 0' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div>{i18n.wannaKnowAboutWhoWeAre}</div>
              <Button className="btn-vmore" style={{ marginLeft: '5px', background: '#3a5290', border: 'none' }} type="primary" onClick={this.handleClick} size="large">
                {i18n.story}
              </Button>
            </div>
          </div>
        </div>
      </div>;
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
)(AboutDesktopOrganization);
