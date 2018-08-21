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
  render() {
    const {i18n} = this.props;

    const content = () => {
      if (this.props.isScroll)
        return <div>
            <div className="container">
              <a className="item" href="http://fpt.edu.vn/tin-tuc/25323/quan-quan-chung-ket-fpt-edu-hackathon-2018-goi-ten-vteam-va-shs">
                <img className="imgEvent" src={ean01} alt="ean01" />
                <div className="card">
                  <div className="card-title">{i18n.card1Title}</div>
                  <div className="card-detail">{i18n.card1Detail}</div>
                </div>
              </a>

              <a className="item" href="https://www.facebook.com/fu.jsclub/posts/1799267570187751?__xts__[0]=68.ARAEDfGQU4lJp2zSWUs9MnRITg3I2UDRtGDzN2_xR2OsWD_G4E63KKDOLAOfrLgy8UcVGntkoM79dLzOo0cg-GMySLbQR75ARS5JVUC7OSrKeI0hkML3PYTQ49MCL7JLWnjwdxQG-fhY&__tn__=-R">
                <img className="imgEvent" src={ean02} alt="ean02" />
                <div className="card">
                <div className="card-title">{i18n.card2Title}</div>
                <div className="card-detail">{i18n.card2Detail}</div>
                </div>
              </a>

              <a className="item" href="https://www.facebook.com/fu.jsclub/posts/1673094416138401?__xts__%5B0%5D=68.ARBLhklEeKoDTvaGfq7MN8U6OyRfdH6fIbMm6_z6ce7q96dRwyPm7Jb4OeSpOOBJvZvJfpiaf4nJKGxVLrZ3d9JeRYpJ-FQNymdOLiJSW7CmJfsumyWVbw6yYdbZkG02ZUjrVjfK2Y0F&__tn__=-R">
                <img className="imgEvent" src={ean03} alt="ean03" />
                <div className="card">
                <div className="card-title">{i18n.card3Title}</div>
                <div className="card-detail">{i18n.card3Detail}</div>
                </div>
              </a>
            </div>

            <div className="container">
              <a className="item" href="https://www.facebook.com/fu.jsclub/posts/1636242093156967?__xts__[0]=68.ARD7tXKpSngV9qyi2A3f2ePuq9vQ_9Geh8rUe1tLek1XBsXAZmZZR-Z2r25t6O5WEvQPBrEKufwKH8wZNE48DxcWIAfpsieYdRFxTlJ4xYvJ-frxsGXP3kGfJG0jYLJbVUFwNQQ87elS&__tn__=-R">
                <img className="imgEvent" src={ean04} alt="ean04" />
                <div className="card">
                <div className="card-title">{i18n.card4Title}</div>
                <div className="card-detail">{i18n.card4Detail}</div>
                </div>
              </a>

              <a className="item" href="https://www.facebook.com/fu.jsclub/posts/1549880675126443?__xts__%5B0%5D=68.ARADOoZHrHv913dpCjVBnYfPokEN8pnCAI46V9Bs4XgKh39EiqSBrXQmdtge81GVzwpH-gt4AuXZ_SZ5ulNvOTT_qhtjX5tpYQ5qkHAEC4VNHpRFGxn5HkAZdJbzKZD1KLBV6uxVdWo_&__tn__=-R">
                <img className="imgEvent" src={ean05} alt="ean05" />
                <div className="card">
                <div className="card-title">{i18n.card5Title}</div>
                <div className="card-detail">{i18n.card5Detail}</div>
                </div>
              </a>

              <a className="item" href="https://www.facebook.com/fu.jsclub/posts/1549364328511411?__tn__=-R">
                <img className="imgEvent" src={ean06} alt="ean06" />
                <div className="card">
                <div className="card-title">{i18n.card6Title}</div>
                <div className="card-detail">{i18n.card6Detail}</div>
                </div>
              </a>
            </div>
          </div>;
    };
    return (
      <div>
        <div className="event" style={{ margin: '0 10%', width: '80%' }}>
          {content()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { mobile, scroll, i18n } = state;
  return {
    isMobile: mobile,
    isScroll: scroll,
    i18n
  };
}

export default connect(
  mapStateToProps,
  null
)(EventDesktop);
