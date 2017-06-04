import React, { Component } from 'react';
import './Block.css';
import "./block-img-ok-1.jpg";

class Block extends Component {
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
    debugger;
  }

  render() {
    let className = "Block"
    debugger;
    if (this.state.id.toUpperCase() === this.props.selected.toUpperCase()) {className = className +" selected"}

    return (
      <div className={className}>
        {
          this.props.type === "image"
          ?
          <img src='https://s-media-cache-ak0.pinimg.com/736x/3f/03/2a/3f032ae4a4c865b458e207c0f154098a.jpg' alt="image" className="b-img img-fluid"/>
          :
          <div>
            <h1 className="b-title">Title</h1>
            <p className="b-paragraph">{this.props.value}</p>
          </div>
        }
      </div>
    );
  }
}

export default Block;
