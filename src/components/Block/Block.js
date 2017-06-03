import React, { Component } from 'react';
import './Block.css';


class Block extends Component {
  render() {
    return (
      <div className="Block">
        <h1 className="b-title">Title</h1>
        <p className="b-paragraph">Lorem ipsum dolor sit amet, coLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu fringilla ante. Duis et mauris eget mauris fermentum tempor sed in urna. Nullam in turpis eget eros sagittis luctus eu quis arcu. Donec luctus lacus nec neque porta congue. Suspendisse accumsan tempus rhoncus. Donec justo massa, semper quis lobortis id, tristique in nisi. Duis condimentum lacus sed mauris suscipit tempus. Etiam sagittis efficitur sem, et pellentesque lectus ornare et. Praesent molestie arcu et purus consectetur fermentum. Proin id ornare felis. Sed at rutrum elit, nec bibendum est. Nunc ut elit diam.</p>
      </div>
    );
  }
}

export default Block;
