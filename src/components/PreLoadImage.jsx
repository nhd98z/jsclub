import React, { Component } from 'react';
import { connect } from 'react-redux';

import bg01m from '../img/background-01-mobile.png';
import bg01 from '../img/background-01.png';
import bg02m from '../img/background-02-mobile.png';
import bg02 from '../img/background-02.png';
import logo from '../img/logo.png';

const orange = 'color: orange';
const green = 'color: green';
const css = 'color: blue';

class PreLoadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileImages: [bg01m, bg02m],
      desktopImages: [bg01, bg02],
      bothImages: [logo]
    };
  }
  
  componentDidMount() {
    window.addEventListener('load', function(event) {
      console.log('%cAll images finished loading!', css);
    });
  }

  handleImageLoaded(index, array, type) {
    console.log(`%cLoaded image ${index + 1}/${array.length}`, orange);
    if (index + 1 === array.length) console.log(`%cPreload ${type} images successful!`, green);
  }

  render() {
    const mobile = () => {
      const array = [...this.state.mobileImages];
      return (
        <div>
          {array.map((value, index) => (
            <img src={value} onLoad={(index, array) => this.handleImageLoaded(index, array, 'mobile')} alt="alt" key={index} />
          ))}
        </div>
      );
    };

    const desktop = () => {
      const array = [...this.state.desktopImages];
      return (
        <div>
          {array.map((value, index) => (
            <img src={value} onLoad={(index, array) => this.handleImageLoaded(index, array, 'desktop')} alt="alt" key={index} />
          ))}
        </div>
      );
    };

    const both = () => {
      const array = [...this.state.bothImages];
      return (
        <div>
          {array.map((value, index) => (
            <img src={value} onLoad={(index, array) => this.handleImageLoaded(index, array, 'both')} alt="alt" key={index} />
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
