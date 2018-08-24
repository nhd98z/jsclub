import React, { Component } from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';

import logo from '../../img/logo-cut.png';

class FooterDesktop extends Component {
  render() {
    const { i18n } = this.props;

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
            <div>{i18n.explore}</div>
            <div className="ft-explore-content">
              <a href="/about">{i18n.aboutUs}</a>
            </div>
            <div className="ft-explore-content">
              <a href="/events">{i18n.events}</a>
            </div>
            <div className="ft-explore-content">
              <a href="/partners">{i18n.partners}</a>
            </div>
            <div className="ft-explore-content">
              <a href="/news">{i18n.news}</a>
            </div>
          </div>

          <div className="ft-explore">
            <div>{i18n.visit}</div>
            <div className="ft-explore-content">{i18n.fptUniversity}</div>
            <div className="ft-explore-content">{i18n.km29ThangLong}</div>
            <div className="ft-explore-content">{i18n.hoaLacHighTechHanoi}</div>
          </div>

          <div className="ft-explore">
            <div>{i18n.contact}</div>
            <div className="ft-explore-content">
              <Icon type="mobile" />
              &nbsp;&nbsp;&nbsp;+841659263711
            </div>
            <div className="ft-explore-content">
              <Icon type="mail" />
              &nbsp;&nbsp;&nbsp;omega1100100@gmail.com
            </div>
            <div className="ft-explore-content">
              <Icon type="facebook" style={{ marginTop: '-5px', width: '14px' }} />
              &nbsp;&nbsp;&nbsp;/fu.jsclub
            </div>
          </div>
        </div>

        <div className="ft-mb-copyright">Copyright © 2018 JS Club.</div>
      </footer>
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
)(FooterDesktop);
