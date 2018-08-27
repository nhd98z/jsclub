import React, { Component } from 'react';

class YearMobile extends Component {
  render() {
    return (
      <div className="year-mb-wrap">
        <img className="year-mb-img" src={this.props.img1} alt="img1" />
        <div className="year-mb-title">{this.props.year}</div>
        <div className="year-mb-detail">{this.props.detail1}</div>
        <div>&nbsp;</div>
        <div className="year-mb-detail">{this.props.detail2}</div>
        <img className="year-mb-img" src={this.props.img2} alt="img1" />
        {this.props.last && <hr style={{ margin: '0% 10% 10% 10%', border: '0', borderTop: '1px solid #ecf0f1' }} />}
      </div>
    );
  }
}

export default YearMobile;
