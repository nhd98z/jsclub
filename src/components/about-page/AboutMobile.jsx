import React, { Component } from 'react';
import { connect } from 'react-redux';

import AboutMobileIntroduction from './AboutMobileIntroduction';
import AboutMobileOrganization from './AboutMobileOrganization';

class AboutMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIntroduction: true
    };
    this.switchPage = this.switchPage.bind(this);
  }

  switchPage() {
    console.log('switched');
    this.setState(prevState => ({ isIntroduction: !prevState.isIntroduction }));
  }

  render() {
    return this.state.isIntroduction ? (
      <AboutMobileIntroduction switchPage={this.switchPage} />
    ) : (
      <AboutMobileOrganization switchPage={this.switchPage} />
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
)(AboutMobile);
