import React, { Component } from 'react';
import { connect } from 'react-redux';

import Year from './Year';

class HistoryDesktop extends Component {
  render() {
    const { i18n } = this.props;
    return <div>
        <div className="whoweare">{i18n.throughHistory}</div>
        <Year year="2018" />
        <Year year="2017" />
        <Year year="2016" />
      </div>;
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
