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
        <h1 className="b-title">Title</h1>
        <p className="b-paragraph">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
        <img className="b-img img-fluid"/>
      </div>
    );
  }
}

export default Block;
