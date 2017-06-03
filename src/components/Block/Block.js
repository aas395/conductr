import React, { Component } from 'react';
import './Block.css';


class Block extends Component {
  constructor(){
    super();
    this.state = {
      id: "",
      components: [
        {props: "props"},
        {props: "props"},
        {props: "props"}
      ]
    }
  }

  componentDidMount(){
    this.setState({id: this.props.id})
  }

  render() {
    return (
      <div className="Block">
        This is a Block

      </div>
    );
  }
}

export default Block;
