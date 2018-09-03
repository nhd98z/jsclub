import React, { Component } from 'react';
import { Button, Menu, Dropdown, Icon } from 'antd';

class MemberMenuMobile extends Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="1" onClick={() => this.props.changeDetail(0)}>Ban Chủ Nhiệm</Menu.Item>
        <Menu.Item key="2" onClick={() => this.props.changeDetail(1)}>Ban Chuyên Môn</Menu.Item>
        <Menu.Item key="3" onClick={() => this.props.changeDetail(2)}>Ban Truyền thông</Menu.Item>
        <Menu.Item key="4" onClick={() => this.props.changeDetail(3)}>Ban Văn Hóa</Menu.Item>
        <Menu.Item key="5" onClick={() => this.props.changeDetail(4)}>Ban Đối Ngoại</Menu.Item>
        <Menu.Item key="6" onClick={() => this.props.changeDetail(5)}>Tất Cả Thành Viên</Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu} wid>
        <Button className='button-color' block>
          Các Ban <Icon type="down" />
        </Button>
      </Dropdown>
    );
  }
}

export default MemberMenuMobile;