import React, { Component } from 'react';
import { connect } from 'react-redux';

import bg01m from '../img/background-01-mobile.png';
import bg01 from '../img/background-01.png';
import bg02m from '../img/background-02-mobile.png';
import bg02 from '../img/background-02.png';
import bg03m from '../img/background-03-mobile.png';
import bg03 from '../img/background-03.png';
import logo from '../img/logo.png';
import logoCut from '../img/logo-cut.png';
import ean01 from '../img/ean-01.png';
import ean02 from '../img/ean-02.png';
import ean03 from '../img/ean-03.png';
import ean04 from '../img/ean-04.png';
import ean05 from '../img/ean-05.png';
import ean06 from '../img/ean-06.png';
import vn from '../img/vn.png';
import uk from '../img/uk.png';
import jp from '../img/jp.png';

const successOne = 'color: #74b9ff';
const successAll = 'color: green';
const bigFont = 'font-weight: bolder; color: #fdcb6e';

const mobileImages = [bg01m, bg02m, bg03m];
const desktopImages = [bg01, bg02, bg03, vn, uk, jp];
const bothImages = [logo, logoCut, ean01, ean02, ean03, ean04, ean05, ean06];

class PreLoadImage extends Component {
  componentDidMount() {
    console.log('PreLoad is mounted');
    window.addEventListener('load', function(event) {
      console.log('%cAll images loaded!', bigFont);
    });
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

    return (
      <div style={{ display: 'none' }}>
        {getMobileOrDesktop()}
        {both()}
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
