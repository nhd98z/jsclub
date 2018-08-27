import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from './Loader';

import img1 from '../img/hackathon-avatar.jpg';
import img2 from '../img/ci-avatar.jpg';
import img3 from '../img/cp-avatar.png';
import img4 from '../img/prom-avatar.jpg';
import img5 from '../img/tb-avatar.jpg';

const mobileImages = [img1, img2, img3, img4, img5];
const desktopImages = [];
const otherImages = [];

class PreLoadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    window.onload = () => {
      this.timer = setTimeout(() => {
        this.setState(prevState => ({ loaded: !prevState.loaded }), () => console.log('window.onload', this.state));
        console.log('%cAll images loaded', 'color: green');
      }, 500);
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const mobile = (
      <div>
        {mobileImages.map((value, index) => (
          <img src={value} alt={index} key={index} />
        ))}
      </div>
    );

    const desktop = (
      <div>
        {desktopImages.map((value, index) => (
          <img src={value} alt={index} key={index} />
        ))}
      </div>
    );

    const other = (
      <div>
        {otherImages.map((value, index) => (
          <img src={value} alt={index} key={index} />
        ))}
      </div>
    );

    return (
      <div>
        {!this.state.loaded && <Loader />}
        <div style={{ display: 'none' }}>
          {this.props.isMobile ? mobile : desktop}
          {other}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { mobile, scroll } = state;
  return {
    isMobile: mobile,
    isScroll: scroll
  };
}

export default connect(
  mapStateToProps,
  null
)(PreLoadImage);
