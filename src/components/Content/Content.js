import React, { Component } from 'react';
import './Content.css';
import Row from '../Row/Row';

class Content extends Component {
  constructor(){
    super();
    this.state = {
      id: "body",
      addRow: false,
      components: [
      ]
    }
  }



  componentDidUpdate(){
    // this.setState({addRow: this.props.actions.addRow})
    if (this.props.selected.toLowerCase() === this.state.id && this.props.actions.addRow) {
      this.addRow()
      }

    }


  addRow() {
    console.log("adding row")
    this.setState({components: this.state.components.concat({props: "props"})});
    this.props.resetActions()
  }

  render() {
  let className = "Content"
  if (this.state.id.toUpperCase() == this.props.selected.toUpperCase()) {className = className +" selected"}

    return (
      <div className={className}>
        {this.state.components.map((component, i) => {
          return(
            <Row
              key={i}
              data={component.props}
              parentId={this.state.id}
              id={this.state.id +" "+ (i+1)}
              selected={this.props.selected}
              actions={this.props.actions}
              resetActions={this.props.resetActions}
              blockImg={this.props.blockImg}
              blockText={this.props.blockText}
            />
          )
        })
      }
        {this.props.showLabels ? <div className="label">{this.state.id}</div> : null}
      </div>
    );
  }
}

export default Content;
