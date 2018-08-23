import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import Mobile from './EventsMobile';
import Desktop from './EventsDesktop';
import './events.css';

class Events extends Component {
  render() {
    const responsiveRender = () => (this.props.isMobile ? <Mobile /> : <Desktop />);
    return (
      <div>
        <NavBar />
        {responsiveRender()}
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
)(Events);
