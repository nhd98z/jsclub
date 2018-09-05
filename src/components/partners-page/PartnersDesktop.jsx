import React from 'react';
import { Col } from 'antd';
import PartnersText from './PartnersText';

import Background from '../../img/color.png';
import Logo1 from '../../img/TechkidBrandColor.png';
import Logo2 from '../../img/logo_vietis.png';
import Logo3 from '../../img/topcv-logo.png';
import Logo4 from '../../img/new-wave.png';
import Logo5 from '../../img/cv3.png';
import Logo6 from '../../img/ava pdpc.png';
import Logo7 from '../../img/cropped-Logo-FU-01.png';
import Logo8 from '../../img/ava pdp.png';
import Logo9 from '../../img/logo_sota.png';
import Logo10 from '../../img/gvn-logo2.png';
import Logo11 from '../../img/logo-AltPlus-300x.png';
import Logo12 from '../../img/3s-intersoft-jsc.png';
import Logo13 from '../../img/rikkei-logso.png';

const link1 = 'https://techkids.vn/';
const link2 = 'https://vietis.com.vn/';
const link3 = 'https://www.topcv.vn/';
const link4 = 'http://newwave.vn/';
const link5 = 'https://dongphuccavoi.wordpress.com/';
const link6 = 'https://www.facebook.com/icpdp.hn/';
const link7 = 'http://daihoc.fpt.edu.vn/';
const link8 = 'https://www.fpt-software.com/';
const link9 = 'https://sotatek.com/';
const link10 = '/partners';
const link11 = 'https://altplus.com.vn/';
const link12 = 'https://www.3si.vn/en/';
const link13 = '/partners';

var sectionStyle = {
  width: '100%',
  height: '100vh',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: `url(${Background})`
};

class PartnersDesktop extends React.Component {
  render() {
    return (
      <div className="partners" style={sectionStyle}>
        <Col span={2} />
        <Col span={5}>
          <PartnersText />
        </Col>
        <Col span={2} />
        <Col span={5}>
          <div className="logo-block">
            <div className="vertical-line" />
            <a target="_blank" href={link1} className="logo-wrapper">
              <img id="logo1" alt="partner-desktop" className="logo" src={Logo1} />
            </a>
            <a target="_blank" href={link2} className="logo-wrapper">
              <img id="logo2" alt="partner-desktop" className="logo" src={Logo2} />
            </a>
            <a target="_blank" href={link3} className="logo-wrapper">
              <img id="logo3" alt="partner-desktop" className="logo" src={Logo3} />
            </a>
            <a target="_blank" href={link4} className="logo-wrapper">
              <img id="logo4" alt="partner-desktop" className="logo" src={Logo4} />
            </a>
            <a target="_blank" href={link5} className="logo-wrapper">
              <img id="logo5" alt="partner-desktop" className="logo" src={Logo5} />
            </a>
          </div>
        </Col>
        <Col span={5}>
          <div className="logo-block">
            <div className="vertical-line" />
            <a target="_blank" href={link6} className="logo-wrapper">
              <img id="logo6" alt="partner-desktop" className="logo" src={Logo6} />
            </a>
            <a target="_blank" href={link7} className="logo-wrapper">
              <img id="logo7" alt="partner-desktop" className="logo" src={Logo7} />
            </a>
            <a target="_blank" href={link8} className="logo-wrapper">
              <img id="logo8" alt="partner-desktop" className="logo" src={Logo8} />
            </a>
            <a target="_blank" href={link9} className="logo-wrapper">
              <img id="logo9" alt="partner-desktop" className="logo" src={Logo9} />
            </a>
          </div>
        </Col>
        <Col span={5}>
          <div className="logo-block">
            <div className="vertical-line" />
            <a target="_blank" href={link10} className="logo-wrapper">
              <img id="logo10" alt="partner-desktop" className="logo" src={Logo10} />
            </a>
            <a target="_blank" href={link11} className="logo-wrapper">
              <img id="logo11" alt="partner-desktop" className="logo" src={Logo11} />
            </a>
            <a target="_blank" href={link12} className="logo-wrapper">
              <img id="logo12" alt="partner-desktop" className="logo" src={Logo12} />
            </a>
            <a target="_blank" href={link13} className="logo-wrapper">
              <img id="logo13" alt="partner-desktop" className="logo" src={Logo13} />
            </a>
          </div>
        </Col>
      </div>
    );
  }
}

export default PartnersDesktop;
