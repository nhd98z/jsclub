import React, { Component } from 'react';
import { connect } from 'react-redux';

const successOne = 'color: #74b9ff';
const successAll = 'color: green';
const bigFont = 'font-weight: bolder; color: #fdcb6e';

const mobileImages = [];
const desktopImages = [];
const bothImages = [];

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
