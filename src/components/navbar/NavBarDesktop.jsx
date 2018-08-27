import React, { Component } from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import { bake_cookie } from 'sfcookies';
import { Link } from 'react-router-dom';

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
    this.handleLanguageClick = this.handleLanguageClick.bind(this);
    this.chooseLanguageClick = this.chooseLanguageClick.bind(this);
  }

  handleLanguageClick() {
    this.setState(prevState => ({ openLanguageBar: !prevState.openLanguageBar }));
  }

  // Không nên viết function như này trong React, nên đưa biến language vào state
  chooseLanguageClick(language = 'en') {
    this.handleLanguageClick();
    switch (language) {
      case 'en':
        this.props.setEnglish();
        bake_cookie('language_cookie', 'en');
        console.log('bake_cookie successful');
        break;
      case 'vi':
        this.props.setVietnamese();
        bake_cookie('language_cookie', 'vi');
        console.log('bake_cookie successful');
        break;
      case 'jp':
        this.props.setJapanese();
        bake_cookie('language_cookie', 'jp');
        console.log('bake_cookie successful');
        break;
      default:
        console.error('bug bug bug');
    }
  }

  render() {
    const global = () =>
      !this.state.openLanguageBar ? (
        <div className="global-wrap">
          <Icon className="global-icon-desk" type="global" onClick={this.handleLanguageClick} />
        </div>
      ) : (
        <div className="global-wrap">
          <img src={uk} className="flat" alt="uk" onClick={() => this.chooseLanguageClick('en')} />
          <img src={vn} className="flat" alt="vn" onClick={() => this.chooseLanguageClick('vn')} />
          <img src={jp} className="flat" alt="jp" onClick={() => this.chooseLanguageClick('jp')} />
        </div>
      );

    const { i18n } = this.props;
    document.title = i18n.webTitle;

    return (
      <div>
        <div style={{ height: '64px', background: '#000000' }} />
        <div className="navbar-wrap">
          <div className="navbar">
            <Link to="/" className="navbar-e navbar-e-t">
              <img src={logo} alt="logo" style={{ height: '80px' }} />
            </Link>
            <Link to="/about" className="navbar-e navbar-e-t">
              {i18n.aboutUs}
            </Link>
            <Link to="/events" className="navbar-e navbar-e-t">
              {i18n.events}
            </Link>
            <Link to="/partners" className="navbar-e navbar-e-t">
              {i18n.partners}
            </Link>
            <Link to="/news" className="navbar-e navbar-e-t">
              {i18n.news}
            </Link>
            <div className="navbar-e navbar-e-t navbar-e-global">{global()}</div>
          </div>
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
)(NavBarDesktop);
