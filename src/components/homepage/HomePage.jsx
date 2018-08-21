import React, { Component } from 'react';

import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import BackGround from './background/BackGround';
import WhoWeAre from './whoweare/WhoWeAre';
import Event from './events/Event';
import History from './history/History';

class HomePage extends Component {
  render() {
    return (
      <aside>
        <NavBar />

        <BackGround />
        <WhoWeAre />
        <Event />
        <History />

        <Footer />
      </aside>
    );
  }
}

export default HomePage;
