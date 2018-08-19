import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import HomePage from './homepage/HomePage';
import PreLoadImage from './PreLoadImage';
import { setMobile, setScroll } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    // set mobile REDUX for first time
    this.props.setMobile(window.innerWidth);
    console.log('App', 'window.innerWidth', window.innerWidth);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ init: true });
  }

  componentDidUpdate() {
    if (this.state.init) this.setState({ init: false });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY === 0 && this.props.isScroll) {
      this.props.setScroll(false);
      console.log('App scroll', false);
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
  { setMobile, setScroll }
)(App);
