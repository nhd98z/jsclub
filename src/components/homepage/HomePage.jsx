import React, { Component } from 'react';

import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import BackGround from './background/BackGround';
import WhoWeAre from './whoweare/WhoWeAre';
import Activities from './activities/Activities';
import Events from './events/Events';
import History from './history/History';
import PreLoad from '../PreLoadImage';

import backgroundHomePage from '../../img/background-03.png';

// Ảnh quan trọng của partners page
import backgroundColorful from '../../img/color.png';
// Ảnh quan trọng của about page
import background01 from '../../img/background-01.png';
// Ảnh quan trọng của members page
import organ1 from '../../img/organ1.png';

class HomePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let images = [backgroundHomePage];
    return (
      <aside>
        {/* Khi xem trang chủ thì load ngầm những ảnh quan trọng của các route khác. */}
        <img src={background01} alt="background01" style={{ display: 'none' }} />
        <img src={backgroundColorful} alt="backgroundColorful" style={{ display: 'none' }} />
        <img src={organ1} alt="organ1" style={{ display: 'none' }} />
        <PreLoad images={images} />

        <NavBar />

        <BackGround />
        <WhoWeAre />
        <Events />
        <Activities />
        <History />

        <Footer />
      </aside>
    );
  }
}

export default HomePage;
