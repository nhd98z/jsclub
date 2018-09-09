import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import PreLoad from '../PreLoadImage';
import Desktop from './MembersDesktop';
import Mobile from './MembersMobile';

import organ1 from '../../img/organ1.png';

class Members extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render() {
    const images = [organ1];
    return (
      <div>
        <PreLoad images={images} />

        <NavBar />
        {this.props.isMobile ? <Mobile /> : <Desktop />}
        {/* dung */}
        <div style={{ marginBottom: '2%' }} />
        {/* dung */}
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
)(Members);
