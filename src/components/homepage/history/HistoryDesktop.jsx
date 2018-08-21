import React, { Component } from 'react';
import { connect } from 'react-redux';

import Year from './YearDesktop';

class HistoryDesktop extends Component {
  render() {
    const { i18n } = this.props;
    const detail = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`;
    return (
      <div>
        <div className="whoweare">{i18n.throughHistory}</div>
        <Year year="2018" detail1={detail} detail2={detail} />
        <Year year="2017" detail1={detail} detail2={detail} />
        <Year year="2016" detail1={detail} detail2={detail} />
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
