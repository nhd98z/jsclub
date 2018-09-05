import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './Members.css';
import MembersMenu from './MembersMenu';
import Leader from './Leader';
import MembersList from './MembersList';
import ActiveMembersInJS from './js-members';

class MembersDesktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 0
    };
    this._changeDetail = this._changeDetail.bind(this);
  }

  renderDetail() {
    if (this.state.menu === 0) {
      return (
        <Col span={18}>
          <Leader />
        </Col>
      );
    } else if (this.state.menu === 1) {
      let array = [];
      for (let i = 0; i < ActiveMembersInJS.length; i++) {
        if (ActiveMembersInJS[i].board === 'expertise') {
          array.push(ActiveMembersInJS[i]);
        }
      }
      return (
        <Col span={18}>
          <MembersList header={this.state.menu} array={array} />
        </Col>
      );
    } else if (this.state.menu === 2) {
      let array = [];
      for (let i = 0; i < ActiveMembersInJS.length; i++) {
        if (ActiveMembersInJS[i].board === 'media') {
          array.push(ActiveMembersInJS[i]);
        }
      }
      return (
        <Col span={18}>
          <MembersList header={this.state.menu} array={array} />
        </Col>
      );
    } else if (this.state.menu === 3) {
      let array = [];
      for (let i = 0; i < ActiveMembersInJS.length; i++) {
        if (ActiveMembersInJS[i].board === 'culture') {
          array.push(ActiveMembersInJS[i]);
        }
      }
      return (
        <Col span={18}>
          <MembersList header={this.state.menu} array={array} />
        </Col>
      );
    } else if (this.state.menu === 4) {
      let array = [];
      for (let i = 0; i < ActiveMembersInJS.length; i++) {
        if (ActiveMembersInJS[i].board === 'diplomacy') {
          array.push(ActiveMembersInJS[i]);
        }
      }
      return (
        <Col span={18}>
          <MembersList header={this.state.menu} array={array} />
        </Col>
      );
    } else if (this.state.menu === 5) {
      return (
        <Col span={18}>
          <MembersList header={this.state.menu} array={ActiveMembersInJS} />
        </Col>
      );
    }
  }

  _changeDetail(value) {
    this.setState({ menu: value });
  }

  render() {
    return (
      <Row>
        <Col style={{ marginTop: '2%' }} span={6}>
          <MembersMenu changeDetail={this._changeDetail}/>
        </Col>
        {this.renderDetail()}
      </Row>
    );
  }
}

export default MembersDesktop;
