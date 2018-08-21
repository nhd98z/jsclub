import React, { Component } from 'react';
import { connect } from 'react-redux';

import background01 from '../../../img/background-01.png';

class Year extends Component {
  render() {
    const { i18n } = this.props;
    return (
      <div className="year-wrap">
        <div className="year">
          <img className="year-img-l" src={background01} alt="alt" />
          <div className="year-tex-r">
            <div className="year-title">{this.props.year}</div>
            <div className="year-detail">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
          </div>
        </div>

        <div className="year">
          <div className="year-tex-r">
            <div className="year-detail" style={{ margin: '0 10% 0 0' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
          </div>
          <img className="year-img-l" src={background01} alt="alt" />
        </div>
        <hr style={{ margin: '0% 10% 5% 10%', border: '0', borderTop: '1px solid #ecf0f1' }} />
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
)(Year);
