import React, { Component } from 'react';

class MenuButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    document
      .getElementById('js-menu-button')
      .querySelector('.menu-icon')
      .classList.toggle('is-active');
    this.props.handleMenuClick();
  }

  render() {
    return (
      <span>
        <div className="menu-button" id="js-menu-button" onClick={this.handleClick}>
          <div className="menu-icon">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </span>
    );
  }
}

export default MenuButton;
