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
    this.setState({
      id: this.props.id,
      components: this.state.components.concat({props: {
        type: "text",
        value: this.props.blockValue.text}
      })
    })

  }

  componentDidUpdate(){
    if (this.props.selected.toLowerCase() === this.state.id) {
      this.props.actions.addImg ? this.addImageBlock() : null
      this.props.actions.addText ? this.addTextBlock() : null
      }
    }

  addImageBlock() {
    this.setState({components: this.state.components.concat({
      props: {
        type: "image",
        value: this.props.blockValue.image}
    })
  });
    this.props.resetActions()
  }

  addTextBlock() {
    this.setState({components: this.state.components.concat({props: {
      type: "text",
      value: this.props.blockValue.text}
    })
  });
    this.props.resetActions()
  }

  render() {
    let className = "Row"
    if (this.state.id.toUpperCase() === this.props.selected.toUpperCase()) {className = className +" selected"}

    return (
      <div className={className}>
        {this.state.components.map((component, i) => {
          return(
          <Block
            key={i}
            data={component.props}
            type={component.props.type}
            value={component.props.value}
            parentId={this.state.id}
            id={this.state.id  +(i+1)}
            selected={this.props.selected}
            showLabels={this.props.showLabels}
          />
        )
      })
    }
      </div>
    );
  }
}

export default Row;
