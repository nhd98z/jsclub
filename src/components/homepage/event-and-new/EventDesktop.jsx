import React, { Component } from 'react';
import { connect } from 'react-redux';

import './event.css';

import testImg from './testimg.jpg';
import testImg2 from './test2.jpg';

class EventDesktop extends Component {
  content = () => {
    if (this.props.isScroll)
      return (
        <div>
          <div className="container">
            <div className="item">
              <img className="imgEvent" src={testImg} alt="0" />
              <div className="card">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>

            <div className="item">
              <img className="imgEvent" src={testImg2} alt="1" />
              <div className="card">hello</div>
            </div>

            <div className="item">
              <img className="imgEvent" src="http://via.placeholder.com/280x200" alt="" />
              <div className="card">hello</div>
            </div>
          </div>

          <div className="container">
            <div className="item">
              <img className="imgEvent" src="http://via.placeholder.com/280x200" alt="" />
              <div className="card">hello</div>
            </div>

            <div className="item">
              <img className="imgEvent" src="http://via.placeholder.com/280x200" alt="" />
              <div className="card">hello</div>
            </div>

            <div className="item">
              <img className="imgEvent" src="http://via.placeholder.com/280x200" alt="" />
              <div className="card">hello</div>
            </div>
          </div>
        </div>
      );
  };

  render() {
    return (
      <div>
        <div className="event" style={{ margin: '0 10%', width: '80%' }}>
          {this.content()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { mobile, scroll } = state;
  return {
    isMobile: mobile,
    isScroll: scroll
  };
}

export default connect(
  mapStateToProps,
  null
)(EventDesktop);
