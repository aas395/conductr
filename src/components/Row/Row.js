import React, { Component } from 'react';
import './Row.css';
import Block from '../Block/Block';



class Row extends Component {
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

  addBlock(e) {
    this.setState({components: this.state.components.concat({props: "props"})});
  }

  render() {
    return (
      <div className="Row">
        <button onClick={this.addBlock.bind(this)}>Add Block</button>
        {this.state.components.map((component, i) => <Block key={i} data={component.props} parentId={this.state.id} id={this.state.id + String.fromCharCode(i+65)}/>)}
      </div>
    );
  }
}

export default Row;
