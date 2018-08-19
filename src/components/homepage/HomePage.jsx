import React, { Component } from 'react';

import NavBar from '../navbar/NavBar';
import Content from './Content';
import Footer from '../footer/Footer';

class HomePage extends Component {
  render() {
    return (
      <aside>
        <NavBar />
        <Content />
        <Footer />
      </aside>
    );
  }
}

export default HomePage;
