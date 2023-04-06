import './Cover2.css';

import React, { Component } from 'react';

class Cover2 extends Component {
  render() {
    return (
      <div className="cover-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Cover2;
