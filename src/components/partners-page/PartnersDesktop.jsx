import React from 'react';
import { Col } from 'antd';
import PartnersText from './PartnersText';
import './PartnersDesktop.css';

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
            <div className="logo-wrapper">
              <img id="logo1" alt="partner-desktop" className="logo" src={Logo1} />
            </div>
            <div className="logo-wrapper">
              <img id="logo2" alt="partner-desktop" className="logo" src={Logo2} />
            </div>
            <div className="logo-wrapper">
              <img id="logo3" alt="partner-desktop" className="logo" src={Logo3} />
            </div>
            <div className="logo-wrapper">
              <img id="logo4" alt="partner-desktop" className="logo" src={Logo4} />
            </div>
            <div className="logo-wrapper">
              <img id="logo5" alt="partner-desktop" className="logo" src={Logo5} />
            </div>
          </div>
        </Col>
        <Col span={5}>
          <div className="logo-block">
            <div className="vertical-line" />
            <div className="logo-wrapper">
              <img id="logo6" alt="partner-desktop" className="logo" src={Logo6} />
            </div>
            <div className="logo-wrapper">
              <img id="logo7" alt="partner-desktop" className="logo" src={Logo7} />
            </div>
            <div className="logo-wrapper">
              <img id="logo8" alt="partner-desktop" className="logo" src={Logo8} />
            </div>
            <div className="logo-wrapper">
              <img id="logo9" alt="partner-desktop" className="logo" src={Logo9} />
            </div>
          </div>
        </Col>
        <Col span={5}>
          <div className="logo-block">
            <div className="vertical-line" />
            <div className="logo-wrapper">
              <img id="logo10" alt="partner-desktop" className="logo" src={Logo10} />
            </div>
            <div className="logo-wrapper">
              <img id="logo11" alt="partner-desktop" className="logo" src={Logo11} />
            </div>
            <div className="logo-wrapper">
              <img id="logo12" alt="partner-desktop" className="logo" src={Logo12} />
            </div>
            <div className="logo-wrapper">
              <img id="logo13" alt="partner-desktop" className="logo" src={Logo13} />
            </div>
          </div>
        </Col>
      </div>
    );
  }
}

export default PartnersDesktop;
