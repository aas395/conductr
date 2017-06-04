import React, { Component } from 'react';
import './Row.css';
import Block from '../Block/Block';



class Row extends Component {
  constructor(){
    super();
    this.state = {
      id: "",
      components: [
      ]
    }
  }

  componentDidMount(){
    this.setState({id: this.props.id})
  }

  componentDidUpdate(){
    if (this.props.selected.toLowerCase() === this.state.id) {
      this.props.actions.addImg ? this.addImageBlock() : null
      this.props.actions.addText ? this.addTextBlock() : null
      }
    }

  addImageBlock() {
    this.setState({components: this.state.components.concat({props: "image"})});
  }

  addTextBlock() {
    this.setState({components: this.state.components.concat({props: "text"})});
  }

  render() {
    let className = "Row"
    if (this.state.id.toUpperCase() == this.props.selected.toUpperCase()) {className = className +" selected"}

    return (
      <div className={className}>
        {this.state.components.map((component, i) => <Block key={i} data={component.props} parentId={this.state.id} id={this.state.id  +(i+1)}/>)}
      </div>
    );
  }
}

export default Row;
