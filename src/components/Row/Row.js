import React, { Component } from 'react';
import './Row.css';
import Block from '../Block/Block';


class Row extends Component {
  render() {
    return (
      <div className="Row">
        <Block />
        <Block />
        <Block />
      </div>
    );
  }
}

export default Row;
