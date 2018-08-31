import React, { Component } from 'react';
import { connect } from 'react-redux';

class MembersMenu extends Component {
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1']
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

  render() {
    const { i18n } = this.props;
    console.log(this.props.i18n);
    return (
      <div className="margin-left-menu">
        <br />
        <ul>
          <li className="menu-item" onClick={() => this.props.changeDetail(0)}>
            {i18n.banchunhiem}
          </li>
          <hr className="line-hr" />
          <li className="menu-item" onClick={() => this.props.changeDetail(1)}>
            {i18n.banchuyenmon}
          </li>
          <hr className="line-hr" />
          <li className="menu-item" onClick={() => this.props.changeDetail(2)}>
            {i18n.bantruyenthong}
          </li>
          <hr className="line-hr" />
          <li className="menu-item" onClick={() => this.props.changeDetail(3)}>
            {i18n.banvanhoa}
          </li>
          <hr className="line-hr" />
          <li className="menu-item" onClick={() => this.props.changeDetail(4)}>
            {i18n.bandoingoai}
          </li>
          <hr className="line-hr" />
          <li className="menu-item" onClick={() => this.props.changeDetail(5)}>
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
