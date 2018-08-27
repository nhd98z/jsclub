import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import Mobile from './AboutMobile';
import Desktop from './AboutDesktop';
import './about.css';

class About extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.isMobile ? <Mobile /> : <Desktop />}
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { mobile } = state;
  return {
    isMobile: mobile
  };
}

export default connect(
  mapStateToProps,
  null
)(About);
