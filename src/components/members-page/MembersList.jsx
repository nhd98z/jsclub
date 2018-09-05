import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Icon } from 'antd';

class MembersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBoard: null
    };
    this.renderBoard = this.renderBoard.bind(this);
    this.renderDetail = this.renderDetail.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.sortAsc = this.sortAsc.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  renderBoard(value) {
    const { i18n } = this.props;
    if (value === 'expertise') {
      return <td style={{ color: 'red', fontWeight: 'bold' }}>{i18n[value]}</td>;
    } else if (value === 'media') {
      return <td style={{ color: '#3498db', fontWeight: 'bold' }}>{i18n[value]}</td>;
    } else if (value === 'culture') {
      return <td style={{ color: '#f1c40f', fontWeight: 'bold' }}>{i18n[value]}</td>;
    } else if (value === 'diplomacy') {
      return <td style={{ color: '#9b59b6', fontWeight: 'bold' }}>{i18n[value]}</td>;
    }
  }

  renderDetail() {
    const { i18n } = this.props;
    return this.props.array.map((value, index) => {
      if (this.props.isMobile){
        return (
          <tr key={value.id} className="item-margin-top">
            <td width="20%">
              <img
                src={window.location.origin + value.avatarUrl}
                width="70px"
                height="70px"
                style={{ marginBottom: '10px', borderRadius: '50%'}}
                alt="ava-members"
              />
            </td>
            <td width="35%" >{value.name}</td>
            <td width="20%" >{value.course}</td>
            {this.renderBoard(value.board)}
          </tr>
        );
      }
      else 
        return (
          <tr key={value.id} className="item-margin-top">
            <td width="10%">
              <img
                src={window.location.origin + value.avatarUrl}
                width="70px"
                height="70px"
                style={{ marginBottom: '10px', borderRadius: '50%'}}
                alt="ava-members"
              />
            </td>
            <td width="30%" >{value.name}</td>
            <td width="10%" >{value.gen}</td>
            <td width="10%" >{value.course}</td>
            <td width="20%">{i18n[value.major]}</td>
            {this.renderBoard(value.board)}
          </tr>
        );
    });
  }


  renderHeader() {
    const { i18n } = this.props;
    if (this.props.header === 1) {
      return (
        <div id="whoweare-intro-desktop" className="whoweare">
          {i18n.banchuyenmonUpper}
        </div>
      );
    } else if (this.props.header === 2) {
      return (
        <div id="whoweare-intro-desktop" className="whoweare">
          {i18n.bantruyenthongUpper}
        </div>
      );
    } else if (this.props.header === 3) {
      return (
        <div id="whoweare-intro-desktop" className="whoweare">
          {i18n.banvanhoaUpper}
        </div>
      );
    } else if (this.props.header === 4) {
      return (
        <div id="whoweare-intro-desktop" className="whoweare">
          {i18n.bandoingoaiUpper}
        </div>
      );
    } else if (this.props.header === 5) {
      return (
        <div id="whoweare-intro-desktop" className="whoweare">
          {i18n.tatcathanhvienUpper}
        </div>
      );
    }
  }

  sortAsc(board) {
    this.props.array.sort(function(a, b) {
      return a[board].localeCompare(b[board]);
    });
  }

  sortDesc() {
    this.props.array.reverse();
  }

  _handleClick(board) {
    this.setState(prevState => {
      if (prevState.sortBoard === board) {
        this.sortDesc();
      } else {
        this.sortAsc(board);
      }
      var a = document.getElementById(`icon-${board}`).classList;
      a.toggle('anticon-caret-up');
      a.toggle('anticon-caret-down');
      if (prevState.sortBoard !== null && prevState.sortBoard !== board) {
        var b = document.getElementById(`icon-${prevState.sortBoard}`).classList;
        b.add('anticon-caret-up');
        b.remove('anticon-caret-down');
      }
      return { sortBoard: board };
    });
  }

  render() {
    const { i18n } = this.props;
    if (this.props.isMobile){
      return (
        <div className="abt-wrap-member-list">
        {this.renderHeader()}
        <table className="table-container">
          <thead>
            <tr className="header" width="100%">
            <th></th>
              <th>
                {i18n.name}
                &nbsp;
                <i style={{ fontSize: 12 }} id="icon-name" className="anticon anticon-caret-up menu-item" onClick={() => this._handleClick('name')} />
              </th>
              <th>
                {i18n.course}
                &nbsp;
                <Icon style={{ fontSize: 12 }} id="icon-course" type="caret-up" className="menu-item" onClick={() => this._handleClick('course')} />
              </th>
              <th>{i18n.board}</th>
            </tr>
          </thead>
          <tbody>{this.renderDetail()}</tbody>
        </table>
      </div>
      )
    }
    return (
      <div className="abt-wrap-member-list">
        {this.renderHeader()}
        <table className="table-container">
          <thead>
            <tr className="header">
              <th>
                {i18n.name}
                &nbsp;
                <i style={{ fontSize: 12 }} id="icon-name" className="anticon anticon-caret-up menu-item" onClick={() => this._handleClick('name')} />
              </th>
              <th />
              <th>
                {i18n.gen}
                &nbsp;
                <Icon style={{ fontSize: 12 }} id="icon-gen" type="caret-up" className="menu-item" onClick={() => this._handleClick('gen')} />
              </th>
              <th>
                {i18n.course}
                &nbsp;
                <Icon style={{ fontSize: 12 }} id="icon-course" type="caret-up" className="menu-item" onClick={() => this._handleClick('course')} />
              </th>
              <th>
                {i18n.major}
                &nbsp;
                <Icon style={{ fontSize: 12 }} id="icon-major" type="caret-up" className="menu-item" onClick={() => this._handleClick('major')} />
              </th>
              <th>{i18n.board}</th>
            </tr>
          </thead>
          <tbody>{this.renderDetail()}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { i18n } = state;
  const { mobile } = state;
  return {
    i18n,
    isMobile: mobile
  };
}

export default connect(
  mapStateToProps,
  null
)(MembersList);
