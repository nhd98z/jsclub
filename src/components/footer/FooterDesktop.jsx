import React, { Component } from 'react';
import { Icon } from 'antd';

import logo from '../../img/logo.png';

class FooterDesktop extends Component {
  render() {
    return (
      <footer className="ft">
        <div className="ft-contact">
          <div>
            <img className="ft-mb-logo" src={logo} alt="logo" />
          </div>
          <span>
            <div>
              <Icon type="home" /> JS Club - FPT University
            </div>
            <div>
              <Icon type="environment-o" /> Hoa Lac High Tech Park, Hanoi
            </div>
            <div>
              <Icon type="mobile" /> +841659263711
            </div>
            <div>
              <Icon type="mail" /> dungnhse05388@fpt.edu.vn
            </div>
          </span>
        </div>
        <div className="ft-mb-copyright">Copyright © 2018 JS Club. All rights reserved.</div>
      </footer>
    );
  }
}

export default FooterDesktop;
