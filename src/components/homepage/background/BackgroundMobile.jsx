import React, { Component } from 'react';

import backgroundMobile_03 from '../../../img/background-03-mobile.png';

class BackGroundMobile extends Component {
  render() {
    const getBg = () => (
      <div className="bg-mobile-event">
        <img className="bg-mobile-event-img" src={backgroundMobile_03} alt="backgroundMobile_03" />
      </div>
    );

    return <div>{getBg()}</div>;
  }
}

export default BackGroundMobile;
