import React, { Component } from 'react';

import BackGround from './background/BackGround';
import WhoWeAre from './WhoWeAre';
import Event from './event-and-new/Event';

class Content extends Component {
  render() {
    return (
      <div>
        <BackGround />
        <WhoWeAre />
        <Event />
      </div>
    );
  }
}

export default Content;
