import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from './Loader';

class PreLoadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
    this.imagesDidLoad = this.imagesDidLoad.bind(this);
  }

  imagesDidLoad() {
    this.timer = setTimeout(() => {
      if (!this.state.loaded) this.setState({ loaded: true });
      console.log('%cAll images loaded', 'color: green');
    }, 1500);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    console.log(this.props.images);
    return (
      <div>
        {!this.state.loaded && <Loader />}
        <div style={{ display: 'none' }}>
          {
            <div onLoad={this.imagesDidLoad}>
              {this.props.images.map((value, index) => (
                <img src={value} alt={index} key={index} />
              ))}
            </div>
          }
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
