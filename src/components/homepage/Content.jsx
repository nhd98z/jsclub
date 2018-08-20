import React, { Component } from 'react';

import BackGround from './background/BackGround';
import Kiki from './eventAndNews/Kiki';

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
