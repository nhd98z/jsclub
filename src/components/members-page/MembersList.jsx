import React, { Component } from 'react';
import ava from '../../img/boy-1.png'

import {Icon} from 'antd'

class MembersList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      sortCategory: null
    }
    this.renderCategory = this.renderCategory.bind(this)
    this.renderDetail = this.renderDetail.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
    this.sortAsc = this.sortAsc.bind(this)
    this._handleClick = this._handleClick.bind(this)
  }


  renderCategory(value) {
    if (value === 'Expertise') {
      return <td style={{color: 'green'}}>{value}</td>
    }
    else if (value === 'Culture') {
      return <td style={{color: 'red'}}>{value}</td>
    }
    else if (value === 'Media') {
      return <td style={{color: 'blue'}}>{value}</td>
    }
    else if (value === 'Diplomacy') {
      return <td style={{color: 'black'}}>{value}</td>
    }
  }

  renderDetail() {
    return this.props.array.map((value, index) => {
            return <tr key={value.id} className='item-margin-top'>
                      <td><img src={ava} width='70px' height='70px' /></td>
                      <td>{value.name}</td>
                      <td>{value.gen}</td>
                      <td>{value.course}</td>
                      <td>{value.major}</td>
                      {this.renderCategory(value.category)}
                  </tr>
    })
  }
  
  renderHeader() {
    // console.log(this.props.header)
    if (this.props.header === 1){
      return <div id="whoweare-intro-desktop" className="whoweare">
            Ban Chuyên Môn
          </div>  
    }
    else if (this.props.header === 2){
      return <div id="whoweare-intro-desktop" className="whoweare">
            Ban Văn Hóa
          </div>
    }
    else if (this.props.header === 3){
      return <div id="whoweare-intro-desktop" className="whoweare">
            Ban Truyền Thông
          </div>
    }
    else if (this.props.header === 4){
      return <div id="whoweare-intro-desktop" className="whoweare">
            Ban Đối Ngoại
          </div>
    }
    else if (this.props.header === 5){
      return <div id="whoweare-intro-desktop" className="whoweare">
            Tất Cả Thành Viên
          </div>
    }
  }

  sortAsc(category) {
    this.props.array.sort(function(a, b) {
      var stringA = a[category]
      var stringB = b[category]
      if (stringA < stringB) {
        return -1;
      }
      if (stringA > stringB) {
        return 1;
      }
      return 0;
    });
  }

  sortDesc() {
    this.props.array.reverse()
  }

  _handleClick(category) {
    this.setState(prevState => {
      if (prevState.sortCategory === category){
        this.sortDesc()
      }
      else {
        this.sortAsc(category)
        // console.log(document.getElementById(`icon-${category}`))
        // a.toggle("anticon-caret-up")
        // a.toggle("anticon-caret-down")
      }
      var a = document.getElementById(`icon-${category}`).classList
      a.toggle("anticon-caret-up")
      a.toggle("anticon-caret-down")
      if (prevState.sortCategory !== null && prevState.sortCategory !== category){
        var b = document.getElementById(`icon-${prevState.sortCategory}`).classList
        b.add("anticon-caret-up")
        b.remove("anticon-caret-down")
      }
      return {sortCategory: category}
    })
  }

  render() {
    // console.log(this.props.array)
    return (
      <div className='abt-wrap-member-list'>
         {this.renderHeader()}
        <table className='table-container'>
          <thead>
            <tr className='header'>
              <th>Name&nbsp;<i id="icon-name" className="anticon anticon-caret-up menu-item" onClick={() => this._handleClick("name")}></i></th>
              <th></th>
              <th>Gen&nbsp;<Icon id='icon-gen' type="caret-up" className='menu-item' onClick={() =>this._handleClick("gen")} /></th>
              <th>Course&nbsp;<Icon id='icon-course' type="caret-up" className='menu-item' onClick={() => this._handleClick("course")} /></th>
              <th>Major&nbsp;<Icon id='icon-major' type="caret-up" className='menu-item' onClick={() => this._handleClick("major")} /></th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
              {this.renderDetail()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MembersList;