import React from 'react';

import Background from '../../img/color.png';
import logo1 from '../../img/TechkidBrandColor.png';
import logo2 from '../../img/logo_vietis.png';
import logo3 from '../../img/topcv-logo.png';
import logo4 from '../../img/new-wave.png';
import logo5 from '../../img/cv3.png';
import logo6 from '../../img/ava pdpc.png';
import logo7 from '../../img/cropped-Logo-FU-01.png';
import logo8 from '../../img/ava pdp.png';
import logo9 from '../../img/logo_sota.png';
import logo10 from '../../img/gvn-logo2.png';
import logo11 from '../../img/logo-AltPlus-300x.png';
import logo12 from '../../img/3s-intersoft-jsc.png';

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

var sectionStyle = {
  width: '100%',
  height: '130%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: `url(${Background})`
};

class PartnersMobile extends React.Component {
  render() {
    return (
      <div className="partners-mobile" style={sectionStyle}>
        <div className="partners-mobile-title">
          <div>SOME</div>
          <div>OF</div>
          <div>OUR</div>
          <div>SPONSORS</div>
          <div>& PARTNERS</div>
        </div>
        <div className="partners-row">
          <a target="_blank" href={link1} className="logo-wrapper">
            <img id="logo1" alt="logo1" className="logo" src={logo1} />
          </a>
          <a target="_blank" href={link2} className="logo-wrapper">
            <img id="logo2" alt="logo2" className="logo" src={logo2} />
          </a>
        </div>
        <div className="partners-row">
          <a target="_blank" href={link3} className="logo-wrapper">
            <img id="logo3" alt="logo3" className="logo" src={logo3} />
          </a>
          <a target="_blank" href={link4} className="logo-wrapper">
            <img id="logo4" alt="logo4" className="logo" src={logo4} />
          </a>
        </div>
        <div className="partners-row">
          <a target="_blank" href={link5} className="logo-wrapper">
            <img id="logo5" alt="logo5" className="logo" src={logo5} />
          </a>
          <a target="_blank" href={link6} className="logo-wrapper">
            <img id="logo6" alt="logo6" className="logo" src={logo6} />
          </a>
        </div>
        <div className="partners-row">
          <a target="_blank" href={link7} className="logo-wrapper">
            <img id="logo7" alt="logo7" className="logo" src={logo7} />
          </a>
          <a target="_blank" href={link8} className="logo-wrapper">
            <img id="logo8" alt="logo8" className="logo" src={logo8} />
          </a>
        </div>
        <div className="partners-row">
          <a target="_blank" href={link9} className="logo-wrapper">
            <img id="logo9" alt="logo9" className="logo" src={logo9} />
          </a>
          <a target="_blank" href={link10} className="logo-wrapper">
            <img id="logo10" alt="logo10" className="logo" src={logo10} />
          </a>
        </div>
        <div className="partners-row">
          <a target="_blank" href={link11} className="logo-wrapper">
            <img id="logo11" alt="logo11" className="logo" src={logo11} />
          </a>
          <a target="_blank" href={link12} className="logo-wrapper">
            <img id="logo12" alt="logo12" className="logo" src={logo12} />
          </a>
        </div>
      </div>
    );
  }
}

export default PartnersMobile;
