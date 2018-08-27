import React, { Component } from 'react';
import { connect } from 'react-redux';

import AboutDesktopIntroduction from './AboutDesktopIntroduction';
import AboutDesktopOrganization from './AboutDesktopOrganization';

class AboutDesktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIntroduction: true
    };
    this.switchPage = this.switchPage.bind(this);
  }

  switchPage() {
    console.log('switched');
    this.setState(prevState => ({isIntroduction: !prevState.isIntroduction}));
  }

  render() {
    return this.state.isIntroduction ? (
      <AboutDesktopIntroduction switchPage={this.switchPage} />
    ) : (
        <AboutDesktopOrganization switchPage={this.switchPage} />
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
)(AboutDesktop);
