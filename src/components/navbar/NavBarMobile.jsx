import React, { Component } from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';

import logo from '../../img/logo.png';
import { setEnglish, setVietnamese, setJapanese } from '../../actions';

class NavBarMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openBar: false,
      openLanguageBar: false
    };
  }

  handleMenuClick() {
    const openBar = !this.state.openBar;
    if (openBar) this.setState({ openLanguageBar: false });
    this.setState({ openBar });
  }

  handleLanguageClick() {
    const openLanguageBar = !this.state.openLanguageBar;
    if (openLanguageBar) this.setState({ openBar: false });
    this.setState({ openLanguageBar });
  }

  chooseLanguageClick(language = 'en') {
    const openLanguageBar = !this.state.openLanguageBar;
    if (openLanguageBar) this.setState({ openBar: false });
    this.setState({ openLanguageBar });
    switch (language) {
      case 'en':
        this.props.setEnglish();
        break;
      case 'vn':
        this.props.setVietnamese();
        break;
      case 'jp':
        this.props.setJapanese();
        break;
      default:
        this.props.setEnglish();
    }
  }

  render() {
    const { i18n } = this.props;
    document.title = i18n.webTitle;

    const bar = () =>
      this.state.openBar ? (
        <div>
          <ul className="navbar-ul">
            <li className="navbar-li">
              <a href="/">{i18n.aboutUs}</a>
            </li>
            <li className="navbar-li">
              <a href="/">{i18n.events}</a>
            </li>
            <li className="navbar-li">
              <a href="/">{i18n.partners}</a>
            </li>
            <li className="navbar-li navbar-li-last">
              <a href="/">{i18n.news}</a>
            </li>
          </ul>
        </div>
      ) : (
        <div />
      );
    const languageBar = () =>
      this.state.openLanguageBar ? (
        <div>
          <ul className="navbar-ul">
            <li className="navbar-li">
              <div className="lang">
                <div onClick={() => this.chooseLanguageClick('vn')}>Tiếng Việt</div>
              </div>
            </li>
            <li className="navbar-li">
              <div className="lang">
                <div onClick={() => this.chooseLanguageClick('en')}>English</div>
              </div>
            </li>
            <li className="navbar-li navbar-li-last">
              <div className="lang">
                <div onClick={() => this.chooseLanguageClick('jp')}>日本語</div>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <div />
      );
    const menuIcon = () => (this.state.openBar ? 'menu-unfold' : 'menu-fold');
    return (
      <div>
        <div style={{ height: '48px', background: '#000000' }} />
        <div className="navbar-wrap">
          <div className="navbar navbar-mb">
            <span className="navbar-e">
              <Icon type={menuIcon()} style={{ fontSize: '24px' }} onClick={() => this.handleMenuClick()} />
            </span>
            <span className="navbar-e">
              <a href="/">
                <img src={logo} alt="logo" style={{ height: '64px' }} />
              </a>
            </span>
            <span className="navbar-e">
              <Icon type="global" style={{ fontSize: '24px' }} onClick={() => this.handleLanguageClick()} />
            </span>
          </div>
          {bar()}
          {languageBar()}
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  const { scroll, i18n } = state;
  return {
    isScroll: scroll,
    i18n
  };
}

export default connect(
  mapStateToProp,
  { setEnglish, setVietnamese, setJapanese }
)(NavBarMobile);
