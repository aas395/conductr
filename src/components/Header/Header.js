import React, { Component } from 'react';
import './Header.css';
import '../../assets/images/header-img-ok.jpg';

class Header extends Component {
  constructor(){
    super();
    this.state = {
      id: "Header",
      components: [
      ]
    }
  }


  render() {
    let className = "Header"
    if (this.state.id.toUpperCase() == this.props.selected.toUpperCase()) {className = className +" selected"}

    return (
      <div className={className}>
        <div  className="wrapper-text">
          <h1 className="title">CONDUCTR</h1>
          <h4 className="sub-title">Talk your way to a beautiful website</h4>
        </div>
        {this.props.showLabels ? <div className="label">{this.state.id}</div> : null}
      </div>
    );
  }
}

export default Header;
