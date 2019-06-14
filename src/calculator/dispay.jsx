import React, { Component } from "react";
import "./sass.scss";
class Display extends Component {
  render() {
    let { result } = this.props;
    return (
      <div>
        <p className="display">{result ? result : 0}</p>
      </div>
    );
  }
}

export default Display;
