import React, { Component } from 'react';

class MembersMenu extends Component {

  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  render() {
    return (
      <div className='margin-left-menu'>
        <br/>
        <ul>
          <li className="menu-item" onClick={() => this.props.changeDetail(0)}> Ban chủ nghiệm </li>
          <hr/>
          <li className="menu-item" onClick={() => this.props.changeDetail(1)}> Ban chuyên môn </li>
          <hr/>
          <li className="menu-item" onClick={() => this.props.changeDetail(2)}> Ban văn hóa </li>
          <hr/>
          <li className="menu-item" onClick={() => this.props.changeDetail(3)}> Ban truyền thông </li>
          <hr/>
          <li className="menu-item" onClick={() => this.props.changeDetail(4)}> Ban đối ngoại </li>
          <hr/>
          <li className="menu-item" onClick={() => this.props.changeDetail(5)}> Tất cả thành viên </li>
          <hr/>
        </ul>
      </div>
    );
  }
}

export default MembersMenu;