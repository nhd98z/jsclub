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
    if (!this.state.loaded) this.setState({ loaded: true });
    console.log('%cAll images loaded', 'color: green');
  }

  render() {
    let { images } = this.props;
    return (
      <div>
        {!this.state.loaded && <Loader />}
        <div style={{ display: 'none' }}>
          {
            <div onLoad={this.imagesDidLoad}>
              {images.map((image, index) => (
                <img src={image} alt={index} key={index} />
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
