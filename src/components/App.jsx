import React, { Component } from 'react';
import { connect } from 'react-redux';
import { read_cookie } from 'sfcookies';

import './App.css';
import HomePage from './homepage/HomePage';
import PreLoadImage from './PreLoadImage';
import { setMobile, setScroll, setJapanese, setVietnamese, setEnglish } from '../actions';

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
    if (window.scrollY === 0 && this.props.isScroll) {
      // this.props.setScroll(false);
      // console.log('App scroll', false);
    } else if (window.scrollY > 0 && !this.props.isScroll) {
      this.props.setScroll(true);
      console.log('App scroll', true);
    }
  }

  render() {
    const preload = () => (this.state.init ? <PreLoadImage /> : <div />);
    return (
      <div>
        {preload()}
        <HomePage />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { scroll } = state;
  return {
    isScroll: scroll
  };
}

export default connect(
  mapStateToProps,
  { setMobile, setScroll, setJapanese, setVietnamese, setEnglish }
)(App);
