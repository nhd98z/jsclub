import React, { Component } from 'react';
import {Col} from 'antd'

import Leader from './Leader'
import MemberMenuMobile from './MemberMenuMobile'
import MembersList from './MembersList'
import ActiveMembersInJS from './js-members'

class MembersMobile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: 0
    };
    this._changeDetail = this._changeDetail.bind(this)
  }
  
  renderDetail() {
    if (this.state.menu === 0) {
      return (
        <Col>
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
        <Col>
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
        <Col>
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
        <Col>
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
        <Col>
          <MembersList header={this.state.menu} array={array} />
        </Col>
      );
    } else if (this.state.menu === 5) {
      return (
        <Col>
          <MembersList header={this.state.menu} array={ActiveMembersInJS} />
        </Col>
      );
    }
  }

  _changeDetail(value) {
    this.setState({menu : value})
  }

  render() {  
    return (
      <div>
        <MemberMenuMobile changeDetail={this._changeDetail}/>
        {this.renderDetail()}
      </div>
      );
  }
}

export default MembersMobile;
