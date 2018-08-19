import React, { Component } from 'react';

import BackGround from './background/BackGround';
import Kiki from './Kiki';

class Content extends Component {
  render() {
    return (
      <div>
        <BackGround />
        <Kiki />
      </div>
    );
  }
}

export default Content;
