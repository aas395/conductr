import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  constructor(){
    super();
    this.state = {
      id: "Navbar",
      components: [
      ]
    }
  }



  render() {
    let className = "NavBar"
    if (this.state.id.toUpperCase() == this.props.selected.toUpperCase()) {className = className +" selected"}

    return (
      <div className={className}>
        <nav className="navbar navbar-toggleable-md navbar-light mr-auto w-100 justify-content-end">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mr-auto">
              <a className="nav-item nav-link active" href="">Link<span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="">Link</a>
              <a className="nav-item nav-link" href="">Link</a>
              <a className="nav-item nav-link" href="">Link</a>

            </div>
          </div>
        </nav>
        {this.props.showLabels ? <div className="label">{this.state.id}</div> : null}
      </div>
    );
  }
}

export default NavBar;
