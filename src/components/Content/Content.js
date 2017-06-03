import React, { Component } from 'react';
import './Content.css';
import Row from '../Row/Row';

class Content extends Component {
  constructor(){
    super();
    this.state = {
      id: "C",
      components: [
        {props: "props"},
        {props: "props"},
        {props: "props"}
      ]
    }
  }

  addBlock(e) {
    this.setState({components: this.state.components.concat({props: "props"})});
  }

  render() {
    return (
      <div className="Content">
        <button onClick={this.addBlock.bind(this)}>Add Row</button>
        {this.state.components.map((component, i) => <Row key={i} data={component.props} parentId={this.state.id} id={this.state.id + (i+1)} />)}
      </div>
    );
  }
}

export default Content;
