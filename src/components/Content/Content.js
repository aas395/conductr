import React, { Component } from 'react';
import './Content.css';
import Row from '../Row/Row';

class Content extends Component {
  constructor(){
    super();
    this.state = {
      id: "Body",
      components: [
      ]
    }
  }


  addBlock(e) {
    this.setState({components: this.state.components.concat({props: "props"})});
  }

  render() {
  let className = "Content"
  if (this.state.id.toUpperCase() == this.props.selected.toUpperCase()) {className = className +" selected"}

    return (
      <div className={className}>
        <button onClick={this.addBlock.bind(this)}>Add Row</button>
        {this.state.components.map((component, i) => <Row key={i} data={component.props} parentId={this.state.id} id={this.state.id + (i+1)} />)}
        {this.props.showLabels ? <div className="label">{this.state.id}</div> : null}
      </div>
    );
  }
}

export default Content;
