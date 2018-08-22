import React, { Component } from 'react';

class YearDesktop extends Component {
  render() {
    const getHr = () => (!this.props.last ? <hr style={{ margin: '0% 10% 5% 10%', border: '0', borderTop: '1px solid #ecf0f1' }} /> : <div />);
    return (
      <div className="year-wrap">
        <div className="year">
          <img className="year-img-l" src={this.props.img1} alt="yeardesktop" />
          <div className="year-tex-r">
            <div className="year-title">{this.props.year}</div>
            <div className="year-detail">{this.props.detail1}</div>
          </div>
        </div>

        <div className="year">
          <div className="year-tex-r">
            <div className="year-detail" style={{ margin: '0 10% 0 0' }}>
              {this.props.detail2}
            </div>
          </div>
          <img className="year-img-l" src={this.props.img2} alt="yeardesktop" />
        </div>
        {getHr()}
      </div>
    );
  }
}

export default YearDesktop;
