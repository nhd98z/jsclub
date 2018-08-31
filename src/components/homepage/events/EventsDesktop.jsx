import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';

import bg01 from '../../../img/hackathon-slide.png';
import bg02 from '../../../img/ci-slide.png';
import bg03 from '../../../img/cp-slide.png';
import bg04 from '../../../img/prom-slide.png';
import bg05 from '../../../img/tb-slide.png';

import av01 from '../../../img/hackathon-avatar.png';
import av02 from '../../../img/ci-avatar.png';
import av03 from '../../../img/cp-avatar.png';
import av04 from '../../../img/prom-avatar.png';
import av05 from '../../../img/tb-avatar.png';

class EventsDesktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.onClickLeft = this.onClickLeft.bind(this);
    this.onClickRight = this.onClickRight.bind(this);
  }

  onClickLeft() {
    document.getElementsByClassName('slide-swipe-left')[0].classList.remove('slide-swipe-left-animation');
    document.getElementsByClassName('slide-swipe-right')[0].classList.remove('slide-swipe-right-animation');
    this.setState(prevState => {
      return {
        currentIndex: prevState.currentIndex === 0 ? 4 : prevState.currentIndex - 1
      };
    });
    const currentSlide = document.getElementById('current-slide').classList;
    currentSlide.add('slideLeft');
    setTimeout(() => {
      currentSlide.remove('slideLeft');
    }, 400);
  }

  onClickRight() {
    document.getElementsByClassName('slide-swipe-left')[0].classList.remove('slide-swipe-left-animation');
    document.getElementsByClassName('slide-swipe-right')[0].classList.remove('slide-swipe-right-animation');
    this.setState(prevState => {
      return {
        currentIndex: prevState.currentIndex === 4 ? 0 : prevState.currentIndex + 1
      };
    });
    const currentSlide = document.getElementById('current-slide').classList;
    currentSlide.add('slideRight');
    setTimeout(() => {
      currentSlide.remove('slideRight');
    }, 400);
  }

  render() {
    const { i18n } = this.props;
    const backgrounds = [bg01, bg02, bg03, bg04, bg05];
    const avatars = [av01, av02, av03, av04, av05];
    const contents = [i18n.hackathonDesktop, i18n.ciDesktop, i18n.cpDesktop, i18n.promDesktop, i18n.tbDesktop];
    const backgroundColors = [
      { background: 'rgb(250, 248, 156)', color: '#1e0e3b' },
      { background: 'rgb(238, 197, 84)', color: '#3867d6' },
      { background: 'rgb(128, 138, 247)', color: '#eef272' },
      { background: 'rgb(123,	242, 145)', color: '#831d3d' },
      { background: 'rgb(234, 107, 102)', color: '#ffffff' }
    ];
    const { currentIndex } = this.state;
    return (
      <div className="event-desktop-container">
        <h1>{i18n.eventsUpperCase}</h1>
        <div id="current-slide" style={{ marginTop: '5%' }}>
          <div className="slide-background-row">
            <img src={backgrounds[currentIndex]} alt="events background" />
          </div>
          <div className="slide-avatar-row">
            <img src={avatars[currentIndex]} alt="events avatar" />
          </div>
          <div className="slide-paragraph" style={backgroundColors[currentIndex]}>
            <Icon type="left" className="slide-swipe-left slide-swipe-left-animation" onClick={this.onClickLeft} />
            <p>{contents[currentIndex]}</p>
            <Icon type="right" className="slide-swipe-right slide-swipe-right-animation" onClick={this.onClickRight} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { i18n } = state;
  return {
    i18n
  };
}

export default connect(
  mapStateToProps,
  null
)(EventsDesktop);
