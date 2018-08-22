import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import ScrollHint from '../homepage/background/ScrollHint';
import backgroundMobile_01 from '../../img/background-01-mobile.png';

import img1 from '../../img/organ1.jpg';
import img2 from '../../img/organ2.jpg';
import img3 from '../../img/organ3.jpg';
import img4 from '../../img/organ4.jpg';
import img5 from '../../img/organ5.jpg';

class AboutMobileOrganization extends Component {
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
            {i18n.organizationUpper}
          </div>
          {/* <div className="abt-mb-avatar-wrap">
          <img className="abt-mb-avatar" src={chairman} alt="chairman" />
        </div> */}
          <img className="abt-mb-img" src={img1} alt="img1" />
          <div className="abt-mb-detail" style={{fontWeight: '500'}}>{i18n.aboutDetail01MobileOrganization}</div>

          <img className="abt-mb-img" src={img2} alt="img2" />
          <div className="abt-mb-detail">{i18n.aboutDetail02MobileOrganization}</div>

          <img className="abt-mb-img" src={img3} alt="img3" />
          <div className="abt-mb-detail">{i18n.aboutDetail03MobileOrganization}</div>

          <img className="abt-mb-img" src={img4} alt="img4" />
          <div className="abt-mb-detail">{i18n.aboutDetail04MobileOrganization}</div>

          <img className="abt-mb-img" src={img5} alt="img5" />
          <div className="abt-mb-detail" style={{marginBottom: '10%'}}>{i18n.aboutDetail05MobileOrganization}</div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              className="btn-vmore"
              style={{ marginBottom: '10%', background: 'rgba(50, 50, 50, 0.8)' }}
              type="primary"
              onClick={this.handleClick}
              size="large"
            >
              {i18n.story}
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
)(AboutMobileOrganization);