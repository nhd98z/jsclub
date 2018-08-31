import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import Mobile from './AboutMobile';
import Desktop from './AboutDesktop';
import './about.css';
import PreLoad from '../PreLoadImage';

import background01mobile from '../../img/background-01-mobile.png';

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const images = [background01mobile];
    return (
      <div>
        {this.props.isMobile && <PreLoad images={images} />}

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
