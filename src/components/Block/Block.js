import React, { Component } from 'react';
import './Block.css';


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
          <img src={this.prop.value} className="img-fluid b-img"/>
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
