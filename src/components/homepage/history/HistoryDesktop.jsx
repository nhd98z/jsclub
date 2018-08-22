import React, { Component } from 'react';
import { connect } from 'react-redux';

import Year from './YearDesktop';

import img201801 from '../../../img/prom2018.jpg';
import img201802 from '../../../img/teambuilding2018.png';
import img201701 from '../../../img/codingproject2017.jpg';
import img201702 from '../../../img/prom2017.jpg';
import img201601 from '../../../img/codingproject2016.jpg';
import img201602 from '../../../img/prom2016.jpg';
import img201501 from '../../../img/teambuilding2015.jpg';
import img201502 from '../../../img/clubday2015.jpg';

class HistoryDesktop extends Component {
  render() {
    const { i18n } = this.props;
    return (
      <div>
        <div className="whoweare">{i18n.throughHistory}</div>
        <Year year="2018" detail1={i18n.detail201801} detail2={i18n.detail201802} img1={img201801} img2={img201802} />
        <Year year="2017" detail1={i18n.detail201701} detail2={i18n.detail201702} img1={img201701} img2={img201702} />
        <Year year="2016" detail1={i18n.detail201601} detail2={i18n.detail201602} img1={img201601} img2={img201602} />
        <Year year="2015" last detail1={i18n.detail201501} detail2={i18n.detail201502} img1={img201501} img2={img201502} />
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
)(HistoryDesktop);
