import React, { Component } from 'react';
import { connect } from 'react-redux';

import upArrow from '../img/up-arrow.png';
import { setScrollFlexible } from '../actions';

class ScrollTop extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const curScroll = window.scrollY;
    console.log('current scroll', curScroll);
    for (let i = curScroll; i >= 0; i--) {
      setTimeout(() => {
        window.scrollTo(0, i);
        // console.log(i);
      }, 0.1 * (curScroll - i));
    }
    this.props.setScrollFlexible(false);
  }

  render() {
    return (
      <div
        style={{
          position: 'fixed',
          zIndex: '999',
          bottom: '20px',
          right: '20px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'rgba(58,82,144, 0.8)',
          color: '#ffffff',
          fontSize: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onClick={this.handleClick}
      >
        <img src={upArrow} alt="up arrow" style={{ height: '22px', width: '22px' }} />
      </div>
    );
  }
}

export default connect(
  null,
  { setScrollFlexible }
)(ScrollTop);
