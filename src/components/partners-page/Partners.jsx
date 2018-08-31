import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import PreLoad from '../PreLoadImage';
import Desktop from './PartnersDesktop';
import Mobile from './PartnersMobile';

import exampleImage from '../../img/background-01.png';

class Partners extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const images = [exampleImage];
    return (
      <div>
        <PreLoad images={images} />

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
)(Partners);
