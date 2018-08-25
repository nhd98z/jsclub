import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from './Loader';

import img1 from '../img/hackathon-avatar.jpg';
import img2 from '../img/ci-avatar.jpg';
import img3 from '../img/cp-avatar.png';
import img4 from '../img/prom-avatar.jpg';
import img5 from '../img/tb-avatar.jpg';

const successOne = 'color: #74b9ff';
const successAll = 'color: green';

const mobileImages = [img1, img2, img3, img4, img5];
const desktopImages = [];
const bothImages = [];

class PreLoadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    // loader
    window.onload = () => {
      setTimeout(() => {
        if (!this.state.loaded) this.setState({ loaded: true });
      }, 1500);
    };
  }

  handleImageLoaded(counter, length, type) {
    console.log(`%cLoaded ${type} image ${counter.value}/${length}`, successOne);
    if (counter.value++ === length) console.log(`%cPreload ${type} images successful!`, successAll);
  }

  render() {
    const mobile = () => {
      const array = [...mobileImages];
      const counter = { value: 1 };
      const length = array.length;
      return (
        <div>
          {array.map((value, index) => (
            <img src={value} onLoad={this.handleImageLoaded.bind(this, counter, length, 'mobile')} alt="alt" key={index} />
          ))}
        </div>
      );
    };

    const desktop = () => {
      const array = [...desktopImages];
      const counter = { value: 1 };
      const length = array.length;
      return (
        <div>
          {array.map((value, index) => (
            <img src={value} onLoad={this.handleImageLoaded.bind(this, counter, length, 'desktop')} alt="alt" key={index} />
          ))}
        </div>
      );
    };

    const both = () => {
      const array = [...bothImages];
      const counter = { value: 1 };
      const length = array.length;
      return (
        <div>
          {array.map((value, index) => (
            <img src={value} onLoad={this.handleImageLoaded.bind(this, counter, length, 'other')} alt="alt" key={index} />
          ))}
        </div>
      );
    };

    const getMobileOrDesktop = () => (this.props.isMobile ? mobile() : desktop());

    const renderLoader = () => (!this.state.loaded ? <Loader /> : <div />);

    return (
      <div>
        {renderLoader()}
        <div style={{ display: 'none' }}>
          {getMobileOrDesktop()}
          {both()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { mobile, scroll } = state;
  return {
    // this.props.isMobile this.props.isScroll
    isMobile: mobile,
    isScroll: scroll
  };
}

export default connect(
  mapStateToProps,
  null
)(PreLoadImage);
