import React, { Component } from 'react';

import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import BackGround from './background/BackGround';
import WhoWeAre from './whoweare/WhoWeAre';
import Event from './events/Event';
import History from './history/History';
import PreLoad from '../PreLoadImage';

import exampleImage from '../../img/background-01.png';

class HomePage extends Component {
  render() {
    let images = [exampleImage];
    return (
      <aside>
        <PreLoad images={images} />

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
