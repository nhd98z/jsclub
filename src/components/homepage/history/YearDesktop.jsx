import React, { Component } from 'react';

class YearDesktop extends Component {
  render() {
    const getMarginPercent = () => {
      if (window.innerWidth <= 1024) return 5;
      if (window.innerWidth <= 1366) return 10;
      if (window.innerWidth <= 1920) return 20;
      return 30;
    };
    const marginPercent = getMarginPercent();
    const widthWrap = 100 - marginPercent * 2;
    console.log(marginPercent, widthWrap);
    const getHr = () => (!this.props.last ? <hr style={{ margin: '0% 10% 5% 10%', border: '0', borderTop: '1px solid #ecf0f1' }} /> : <div />);
    return (
      <div style={{ margin: `5% ${marginPercent}%`, width: `${widthWrap}` }}>
        <div className="year">
          <img className="year-img-l" src={this.props.img1} alt="yeardesktop" />
          <div className="year-tex-r">
            <div className="year-title">{this.props.year}</div>
            <div className="year-detail">{this.props.detail1}</div>
          </div>
        </div>

        <div className="year">
          <div className="year-tex-r" style={{margin: '0 5% 0 0'}}>
            <div className="year-detail">{this.props.detail2}</div>
          </div>
          <img className="year-img-l" src={this.props.img2} alt="yeardesktop" />
        </div>
        {getHr()}
      </div>
    );
  }
}

export default YearDesktop;
