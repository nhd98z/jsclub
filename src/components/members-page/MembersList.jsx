import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Icon } from 'antd';

class MembersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortCategory: null
    };
    this.renderCategory = this.renderCategory.bind(this);
    this.renderDetail = this.renderDetail.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.sortAsc = this.sortAsc.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  renderCategory(value) {
    if (value === 'Expertise') {
      return <td style={{ color: 'green' }}>{value}</td>;
    } else if (value === 'Culture') {
      return <td style={{ color: 'red' }}>{value}</td>;
    } else if (value === 'Media') {
      return <td style={{ color: 'blue' }}>{value}</td>;
    } else if (value === 'Diplomacy') {
      return <td style={{ color: 'black' }}>{value}</td>;
    }
  }

  renderDetail() {
    return this.props.array.map((value, index) => {
      return (
        <tr key={value.id} className="item-margin-top">
          <td>
            <img
              src={window.location.origin + value.avatarUrl}
              width="70px"
              height="70px"
              style={{ marginBottom: '10px', borderRadius: '50%' }}
              alt="ava-members"
            />
          </td>
          <td>{value.name}</td>
          <td>{value.gen}</td>
          <td>{value.course}</td>
          <td>{value.major}</td>
          {this.renderCategory(value.category)}
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

  sortAsc(category) {
    this.props.array.sort(function(a, b) {
      return a[category].localeCompare(b[category]);
    });
  }

  sortDesc() {
    this.props.array.reverse();
  }

  _handleClick(category) {
    this.setState(prevState => {
      if (prevState.sortCategory === category) {
        this.sortDesc();
      } else {
        this.sortAsc(category);
      }
      var a = document.getElementById(`icon-${category}`).classList;
      a.toggle('anticon-caret-up');
      a.toggle('anticon-caret-down');
      if (prevState.sortCategory !== null && prevState.sortCategory !== category) {
        var b = document.getElementById(`icon-${prevState.sortCategory}`).classList;
        b.add('anticon-caret-up');
        b.remove('anticon-caret-down');
      }
      return { sortCategory: category };
    });
  }

  render() {
    return (
      <div className="abt-wrap-member-list">
        {this.renderHeader()}
        <table className="table-container">
          <thead>
            <tr className="header">
              <th>
                Name&nbsp;
                <i style={{ fontSize: 12 }} id="icon-name" className="anticon anticon-caret-up menu-item" onClick={() => this._handleClick('name')} />
              </th>
              <th />
              <th>
                Gen&nbsp;
                <Icon style={{ fontSize: 12 }} id="icon-gen" type="caret-up" className="menu-item" onClick={() => this._handleClick('gen')} />
              </th>
              <th>
                Course&nbsp;
                <Icon style={{ fontSize: 12 }} id="icon-course" type="caret-up" className="menu-item" onClick={() => this._handleClick('course')} />
              </th>
              <th>
                Major&nbsp;
                <Icon style={{ fontSize: 12 }} id="icon-major" type="caret-up" className="menu-item" onClick={() => this._handleClick('major')} />
              </th>
              <th>Category</th>
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
  return {
    i18n
  };
}

export default connect(
  mapStateToProps,
  null
)(MembersList);
