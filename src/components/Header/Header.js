import React, { Component } from 'react';
import './Header.css';
import '../../assets/images/header-img-demo.png';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div  className="wrapper-text">
          <h1 className="title">CONDUCTR</h1>
          <h4 className="sub-title">IBM API connect</h4>
        </div>
      </div>
    );
  }
}

export default Header;
