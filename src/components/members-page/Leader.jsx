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
    this.renderPlatform = this.renderPlatform.bind(this);
  }

  handleClick() {
    const bodyRect = document.body.getBoundingClientRect(),
      elemRect = document.getElementById('whoweare-intro-desktop').getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top;
    window.scrollTo(0, offset - 96);
    this.props.switchPage();
  }

  renderPlatform() {
    const { i18n } = this.props;
    if (this.props.isMobile){
      return (
        <div>
          {/* header */}
          <div id="whoweare-intro-desktop" className="whoweare">
            {i18n.banchunhiemUpper}  
          </div>
          {/* end */}

          <div>
              <div style={{display: "flex", justifyContent: "center"}}>
                <img width="80%" height="80%" src={img1} alt="img1"/>
              </div>
              <div width="100%" className="abt-detail-organ" style={{ fontWeight: '500', backgroundColor: '#f2f2f2' }}>
                {i18n.chairman}
              </div>
          </div>
          <br/>

          <div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <img width="80%" height="80%" src={img2} alt="img2"/>
              </div>
              <div width="100%" className="abt-detail-organ" style={{ fontWeight: '500', backgroundColor: '#f2f2f2' }}>
                {i18n.viceChairman}
              </div>
          </div>
          <br/>

          <div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <img width="80%" height="80%" src={img3} alt="img3"/>
              </div>
              <div width="100%" className="abt-detail-organ" style={{ fontWeight: '500', backgroundColor: '#f2f2f2' }}>
                {i18n.leadOfExpertise}
              </div>
          </div>
          <br/>

          <div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <img width="80%" height="80%" src={img4} alt="img4"/>
              </div>
              <div width="100%" className="abt-detail-organ" style={{ fontWeight: '500', backgroundColor: '#f2f2f2' }}>
                {i18n.leadOfMedia}
              </div>
          </div>
          <br/>

          <div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <img width="80%" height="80%" src={img5} alt="img5"/>
              </div>
              <div width="100%" className="abt-detail-organ" style={{ fontWeight: '500', backgroundColor: '#f2f2f2' }}>
                {i18n.leadOfCulture}
              </div>
          </div>
          <br/>

          <div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <img width="80%" height="80%" src={img6} alt="img6"/>
              </div>
              <div width="100%" className="abt-detail-organ" style={{ fontWeight: '500', backgroundColor: '#f2f2f2' }}>
                {i18n.leadOfDiplomacy}
              </div>
          </div>
          <br/>

 </div>
      )
    }
    else {
      return (
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
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderPlatform()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { i18n, mobile } = state;
  return {
    i18n,
    isMobile: mobile
  };
}

export default connect(
  mapStateToProps,
  null
)(Leader);
