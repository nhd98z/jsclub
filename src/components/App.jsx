import React, { Component } from 'react';
import { connect } from 'react-redux';
import { read_cookie } from 'sfcookies';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import { setMobile, setScroll, setJapanese, setVietnamese, setEnglish, setScrollFlexible } from '../actions';
import HomePage from './homepage/HomePage';
import AboutPage from './about-page/About';
import EventPage from './events-page/Events';
import PartnersPage from './partners-page/Partners';
import NewsPage from './news-page/News';
import ScrollTop from './ScrollTop';
import PreLoadImage from './PreLoadImage';
import Loader from './Loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: true
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.setLanguage = this.setLanguage.bind(this);
  }

  setLanguage() {
    const language = read_cookie('language_cookie');
    switch (language) {
      case 'vn':
        this.props.setVietnamese();
        console.log('read cookie: language vn successful');
        break;
      case 'en':
        this.props.setEnglish();
        console.log('read cookie: language en successful');
        break;
      case 'jp':
        this.props.setJapanese();
        console.log('read cookie: language jp successful');
        break;
      default:
        this.props.setJapanese();
        console.log('do not regconize cookie: set default language = jp');
    }
  }

  componentDidMount() {
    this.setLanguage();
    // REDUX : set width of device every 200ms
    // Math.max(document.documentElement.clientWidth, window.innerWidth || 0) == width
    this.interval = setInterval(() => this.props.setMobile(Math.max(document.documentElement.clientWidth, window.innerWidth || 0)), 50);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUpdate() {
    if (this.state.init === true) this.setState({ init: false });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    // if (window.scrollY === 0 && this.props.isScroll) {
    //   // this.props.setScroll(false);
    //   // console.log('App scroll', false);
    // } else if (window.scrollY > 0 && !this.props.isScroll) {
    //   this.props.setScroll(true);
    //   // console.log('App scroll', true);
    // }

    if (window.scrollY === 0) {
      if (this.props.isScrollFlexible) this.props.setScrollFlexible(false);
    } else if (window.scrollY > 0) {
      if (!this.props.isScrollFlexible) this.props.setScrollFlexible(true);
      if (!this.props.isScroll) this.props.setScroll(true);
    }
  }

  render() {
    // const preload = () => (this.state.init ? <PreLoadImage /> : <div />);
    const renderScrollTop = () => (this.props.isScrollFlexible ? <ScrollTop /> : <div />);
    return (
      <div>
        <Loader />
        {renderScrollTop()}
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/events" component={EventPage} />
            <Route path="/partners" component={PartnersPage} />
            <Route path="/news" component={NewsPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { scroll, mobile, scrollFlexible } = state;
  return {
    isScroll: scroll,
    isMobile: mobile,
    isScrollFlexible: scrollFlexible
  };
}

export default connect(
  mapStateToProps,
  { setMobile, setScroll, setJapanese, setVietnamese, setEnglish, setScrollFlexible }
)(App);
