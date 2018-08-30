import React, { Component } from 'react';

import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import BackGround from './background/BackGround';
import WhoWeAre from './whoweare/WhoWeAre';
import Activities from './activities/Activities';
import Events from './events/Events';
import History from './history/History';
import PreLoad from '../PreLoadImage';

import exampleImage from '../../img/background-01.png';

class HomePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let images = [exampleImage];
    return (
      <aside>
        <PreLoad images={images} />

        <NavBar />

        <BackGround />
        <WhoWeAre />
        <Activities />
        <Events />
        <History />

        <Footer />
      </aside>
    );
  }
}

export default HomePage;
