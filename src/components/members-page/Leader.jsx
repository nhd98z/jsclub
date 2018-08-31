import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Members.css';

import img1 from '../../img/organ1.png';
import img2 from '../../img/organ2.png';
import img3 from '../../img/organ3.png';
import img4 from '../../img/organ4.png';
import img5 from '../../img/organ5.png';
import img6 from '../../img/organ6.png';

class Leader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBackgroundScroll: false
    };
    // phải bind nó
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const bodyRect = document.body.getBoundingClientRect(),
      elemRect = document.getElementById('whoweare-intro-desktop').getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top;
    window.scrollTo(0, offset - 96);
    this.props.switchPage();
  }

  render() {
    const { i18n } = this.props;

    return (
      <div>
        <div className="abt-wrap-leader">
          <div id="whoweare-intro-desktop" className="whoweare">
            {i18n.banchunhiemUpper}  
          </div>

          <div className="person-wrap">
            <img className="abt-img-organ" src={img1} alt="img1" />
            <div className="abt-detail-organ" style={{ fontWeight: '500' }}>
              {i18n.chairman}
            </div>
          </div>

          <div className="person-wrap">
            <div className="abt-detail-organ">{i18n.viceChairman}</div>
            <img className="abt-img-organ" src={img2} alt="img2" />
          </div>

          <div className="person-wrap">
            <img className="abt-img-organ" src={img3} alt="img3" />
            <div className="abt-detail-organ">{i18n.leadOfExpertise}</div>
          </div>

          <div className="person-wrap">
            <div className="abt-detail-organ">{i18n.leadOfMedia}</div>
            <img className="abt-img-organ" src={img4} alt="img4" />
          </div>

          <div className="person-wrap">
            <img className="abt-img-organ" src={img5} alt="img5" />
            <div className="abt-detail-organ">{i18n.leadOfCulture}</div>
          </div>

          <div className="person-wrap" style={{ marginBottom: '5%' }}>
            <div className="abt-detail-organ">{i18n.leadOfDiplomacy}</div>
            <img className="abt-img-organ" src={img6} alt="img6" />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { i18n } = state;
  return {
    i18n
  };
}

export default connect(
  mapStateToProps,
  null
)(Leader);
