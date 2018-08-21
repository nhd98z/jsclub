import React, { Component } from 'react';
import { connect } from 'react-redux';

// import backgroundMobile_01 from '../../../img/background-01-mobile.png';
// import backgroundMobile_02 from '../../../img/background-02-mobile.png';
import backgroundMobile_03 from '../../../img/background-03-mobile.png';
// import logo from '../../../img/logo.png';
// import ScrollHint from './ScrollHint';

class BackGroundMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBackgroundScroll: false
    };
    // phải bind nó
    // this.handleBackgroundScroll = this.handleBackgroundScroll.bind(this);
  }
  componentDidMount() {
    // Auto ra giữa màn hình
    // if (!this.props.isScroll) {
    //   const div = document.getElementById('scrollCenter');
    //   if (div) {
    //     // why this shit need to be wrapped by setTimeout, please?
    //     setTimeout(() => {
    //       div.scrollLeft = 820;
    //     }, 0);
    //   }
    // }
    // Set interval chạy liên tục để đoán
    // this.interval = setInterval(this.handleBackgroundScroll, 200);
    console.log('BackgroundMobile - setInterval');
  }

  componentWillUnmount() {
    // clear interval đi
    // clearInterval(this.interval);
    console.log('BackgroundMobile - clearInterval');
  }

  // handleBackgroundScroll() {
  //   if (!this.props.isScroll) {
  //     const div = document.getElementById('scrollCenter');
  //     if (div) {
  //       // why this shit need to be wrapped by setTimeout, please?
  //       setTimeout(() => {
  //         console.log('BackgroundMobile scrollLeft', div.scrollLeft);
  //         if (div.scrollLeft > 200) this.setState({ isBackgroundScroll: true });
  //       }, 0);        
  //     }
  //   }
  // }

  render() {
    // const getLogo = () =>
    //   !this.props.isScroll ? (
    //     <div className="bg-mobile-logo">
    //       <img className="bg-mobile-logo-img" src={logo} alt="logo" />
    //     </div>
    //   ) : (
    //     <div />
    //   );

    // const getHint = () => (!this.state.isBackgroundScroll ? <ScrollHint /> : <div />);

    // const getBg = () =>
    //   !this.props.isScroll ? (
    //     <div className="bg-mobile-clb" id="scrollCenter">
    //       <img className="bg-mobile-clb-img" src={backgroundMobile_01} alt="backgroundMobile_01" />
    //       {getHint()}
    //     </div>
    //   ) : (
    //     <div className="bg-mobile-event">
    //       <img className="bg-mobile-event-img" src={backgroundMobile_02} alt="backgroundMobile_02" />
    //     </div>
    //   );

    const getBg = () => (
      <div className="bg-mobile-event">
        <img className="bg-mobile-event-img" src={backgroundMobile_03} alt="backgroundMobile_03" />
      </div>
    );

    return (
      <div>
        {getBg()}
        {/* {getLogo()} */}
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
)(BackGroundMobile);
