import React, { Component } from 'react';
import { Icon } from 'antd';

import logo from '../../img/logo.png';

class FooterMobile extends Component {
  render() {
    return (
      <footer>
        <div className="ft-mb-contact">
          <div>
            <img className="ft-mb-logo" src={logo} alt="logo" />
          </div>
          <div className="ft-mb-text">
            <div>一</div>
            <div>期</div>
            <div>一</div>
            <div>会</div>
          </div>
          <span className="ft-mb-text">
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

export default FooterMobile;
