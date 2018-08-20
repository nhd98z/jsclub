import React, { Component } from 'react';
import { Icon } from 'antd';

import logo from '../../img/logo-cut.png';

class FooterDesktop extends Component {
  render() {
    return (
      <footer className="ft-wrap">
        <div className="ft">
          <div className="ft-logo-slogan">
            <img className="ft-logo" src={logo} alt="logo" />
            <div className="ft-slogan">
              <div>一期一会</div>
              <div>決して忘れないように</div>
            </div>
          </div>

          <div className="ft-explore">
            <div>Explore</div>
            <div className="ft-explore-content">
              <a href="/">About Us</a>
            </div>
            <div className="ft-explore-content"><a href="/">Programs</a></div>
              <div className="ft-explore-content"><a href="/">Partners</a></div>
                <div className="ft-explore-content"><a href="/">News</a></div>
          </div>

          <div className="ft-explore">
            <div>Visit</div>
            <div className="ft-explore-content">FPT University</div>
            <div className="ft-explore-content">Km. 29 Thang Long Avenue</div>
            <div className="ft-explore-content">Hoa Lac High Tech Park, Hanoi</div>
            <div className="ft-follow">
              <div>Follow</div>
              <div className="ft-explore-content"><a href="/">Facebook</a></div>
            </div>
          </div>

          <div className="ft-explore">
            <div>Contact</div>
            <div className="ft-explore-content">
              <Icon type="mobile" /> +841659263711
            </div>
            <div className="ft-explore-content">
              <Icon type="mail" /> omega1100100@gmail.com
            </div>
          </div>

          <div className="ft-explore">
            <div>Legal</div>
            <div className="ft-explore-content"><a href="/">Terms</a></div>
            <div className="ft-explore-content"><a href="/">Privacy</a></div>
          </div>
        </div>

        <div className="ft-mb-copyright">Copyright © 2018 JS Club. All rights reserved.</div>
      </footer>
    );
  }
}

export default FooterDesktop;
