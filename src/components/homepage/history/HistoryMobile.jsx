import React, { Component } from 'react';
import { connect } from 'react-redux';

class HistoryMobile extends Component {
  render() {
    const { i18n } = this.props;
    return (
      <div>
        <div className="whoweare">{i18n.throughHistory}</div>
        <h1>mobile</h1>
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
)(HistoryMobile);
