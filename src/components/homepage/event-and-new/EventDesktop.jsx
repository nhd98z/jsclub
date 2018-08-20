import React, { Component } from 'react';
import { connect } from 'react-redux';

import './event.css';

import ean01 from '../../../img/ean-01.png';
import ean02 from '../../../img/ean-02.png';
import ean03 from '../../../img/ean-03.png';
import ean04 from '../../../img/ean-04.png';
import ean05 from '../../../img/ean-05.png';
import ean06 from '../../../img/ean-06.png';

class EventDesktop extends Component {
  content = () => {
    if (this.props.isScroll)
      return (
        <div>
          <div className="container">
            <div className="item">
              <img className="imgEvent" src={ean01} alt="ean01" />
              <div className="card">
                <div className="card-title">Coding Inspiration</div>
                <div className="card-detail">Lorem Ipsum is simply dummy text of the printing...</div>
              </div>
            </div>

            <div className="item">
              <img className="imgEvent" src={ean02} alt="ean02" />
              <div className="card">
                <div className="card-title">Coding Inspiration</div>
                <div className="card-detail">Lorem Ipsum is simply dummy text of the printing...</div>
              </div>
            </div>

            <div className="item">
              <img className="imgEvent" src={ean03} alt="ean03" />
              <div className="card">
                <div className="card-title">Coding Inspiration</div>
                <div className="card-detail">Lorem Ipsum is simply dummy text of the printing...</div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="item">
              <img className="imgEvent" src={ean04} alt="ean04" />
              <div className="card">
                <div className="card-title">Coding Inspiration</div>
                <div className="card-detail">Lorem Ipsum is simply dummy text of the printing...</div>
              </div>
            </div>

            <div className="item">
              <img className="imgEvent" src={ean05} alt="ean05" />
              <div className="card">
                <div className="card-title">Coding Inspiration</div>
                <div className="card-detail">Lorem Ipsum is simply dummy text of the printing...</div>
              </div>
            </div>

            <div className="item">
              <img className="imgEvent" src={ean06} alt="ean06" />
              <div className="card">
                <div className="card-title">Coding Inspiration</div>
                <div className="card-detail">Lorem Ipsum is simply dummy text of the printing...</div>
              </div>
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
