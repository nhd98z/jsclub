import React, { Component } from 'react';

class Loader extends Component {
  render() {
    return (
      <div className="loader-container">
        <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
          <circle cx="170" cy="170" r="160" stroke="#ffffff" />
          <circle cx="170" cy="170" r="135" stroke="#c0392b" />
          <circle cx="170" cy="170" r="110" stroke="#ffffff" />
          <circle cx="170" cy="170" r="85" stroke="#c0392b" />
        </svg>
      </div>
    );
  }
}

export default Loader;
