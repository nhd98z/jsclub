import React, { Component } from 'react';

class YearMobile extends Component {
  render() {
    const getHr = () => (!this.props.last ? <hr style={{ margin: '10% 10% 0% 10%', border: '0', borderTop: '1px solid #ecf0f1' }} /> : <div />);
    return (
      <div className="year-mb-wrap">
        <img className="year-mb-img" src={this.props.img1} alt="img1" />
        <div className="year-mb-title">{this.props.year}</div>
        <div className="year-mb-detail">{this.props.detail1}</div>
        <div>&nbsp;</div>
        <div className="year-mb-detail">{this.props.detail2}</div>
        <img className="year-mb-img" src={this.props.img2} alt="img1" />
        {getHr()}
      </div>
    );
  }
}

export default YearMobile;
