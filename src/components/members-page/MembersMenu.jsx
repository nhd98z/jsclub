import React, { Component } from 'react';
import { connect } from 'react-redux';

class MembersMenu extends Component {
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
    chosen: 0
  };
  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };
  
  checkPop(value){
    if (value === this.state.chosen) return "menu-active"
    else return ""
  }

  render() {
    const { i18n } = this.props;
    return (
      <div className="margin-left-menu stick">
        <br />
        <ul>
          <li id='menu-0' className={`menu-item ${this.checkPop(0)}`} onClick={() => {
              this.setState({chosen: 0})
              this.props.changeDetail(0)}
            }>
            {i18n.banchunhiem}
          </li>
          <hr className="line-hr" />
          <li id='menu-1' className={`menu-item ${this.checkPop(1)}`} onClick={() => {
              this.setState({chosen: 1})
              this.props.changeDetail(1)}
            }>
            {i18n.banchuyenmon}
          </li>
          <hr className="line-hr" />
          <li id='menu-2' className={`menu-item ${this.checkPop(2)}`} onClick={() => {
              this.setState({chosen: 2})
              this.props.changeDetail(2)}
            }>
            {i18n.bantruyenthong}
          </li>
          <hr className="line-hr" />
          <li id='menu-3' className={`menu-item ${this.checkPop(3)}`} onClick={() => {
              this.setState({chosen: 3})
              this.props.changeDetail(3)}
            }>
            {i18n.banvanhoa}
          </li>
          <hr className="line-hr" />
          <li id='menu-4' className={`menu-item ${this.checkPop(4)}`} onClick={() => {
              this.setState({chosen: 4})
              this.props.changeDetail(4)}
            }>
            {i18n.bandoingoai}
          </li>
          <hr className="line-hr" />
          <li id='menu-5' className={`menu-item ${this.checkPop(5)}`} onClick={() => {
              this.setState({chosen: 5})
              this.props.changeDetail(5)}
            }>
            {i18n.tatcathanhvien}
          </li>
          {/* <hr className='line-hr'/> */}
        </ul>
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
)(MembersMenu);
