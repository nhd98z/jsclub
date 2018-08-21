import React, { Component } from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';

import logo from '../../img/logo.png';
import vn from '../../img/vn.png';
import uk from '../../img/uk.png';
import jp from '../../img/jp.png';
import { setEnglish, setVietnamese, setJapanese } from '../../actions';

class NavBarDesktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openLanguageBar: false
    };
  }

  handleLanguageClick() {
    const openLanguageBar = !this.state.openLanguageBar;
    this.setState({ openLanguageBar });
  }

  chooseLanguageClick(language = 'en') {
    const openLanguageBar = !this.state.openLanguageBar;
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
    const global = () =>
      !this.state.openLanguageBar ? (
        <div className="global-wrap">
          <Icon className="global-icon-desk" type="global" onClick={() => this.handleLanguageClick()} />
        </div>
      ) : (
        <div className="global-wrap">
          <img src={uk} className="flat" alt="uk" onClick={() => this.chooseLanguageClick('en')} />
          <img src={vn} className="flat" alt="vn" onClick={() => this.chooseLanguageClick('vn')} />
          <img src={jp} className="flat" alt="jp" onClick={() => this.chooseLanguageClick('jp')} />
        </div>
      );

    const { i18n } = this.props;

    return <div>
        <div style={{ height: '64px', background: '#000000' }} />
        <div className="navbar-wrap">
          <div className="navbar">
            <a className="navbar-e navbar-e-t" href="/">
              <img src={logo} alt="logo" style={{ height: '64px' }} />
            </a>
            <a href="/" className="navbar-e navbar-e-t">
              {i18n.aboutUs}
            </a>
            <a href="/" className="navbar-e navbar-e-t">
              {i18n.events}
            </a>
            <a href="/" className="navbar-e navbar-e-t">
              {i18n.partners}
            </a>
            <a href="/" className="navbar-e navbar-e-t">
              {i18n.news}
            </a>
            <div className="navbar-e navbar-e-t navbar-e-global">{global()}</div>
          </div>
        </div>
      </div>;
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
)(NavBarDesktop);
