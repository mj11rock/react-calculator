import React, { Component } from "react";
//import "./main.css";
import "./sass.scss";

class Buttons extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <button
          className="btn"
          name="CE"
          onClick={e => this.props.onClick(e.target.name)}
        >
          &#8592;
        </button>
        <button
          className="btn"
          name="C"
          onClick={e => this.props.onClick(e.target.name)}
        >
          C
        </button>
        <button
          className="btn"
          name="/"
          onClick={e => this.props.onClick(e.target.name)}
        >
          /
        </button>
        <button
          className="btn"
          name="*"
          onClick={e => this.props.onClick(e.target.name)}
        >
          *
        </button>

        <button
          className="btn"
          name="7"
          onClick={e => this.props.onClick(e.target.name)}
        >
          7
        </button>
        <button
          className="btn"
          name="8"
          onClick={e => this.props.onClick(e.target.name)}
        >
          8
        </button>
        <button
          className="btn"
          name="9"
          onClick={e => this.props.onClick(e.target.name)}
        >
          9
        </button>
        <button
          className="btn"
          name="-"
          onClick={e => this.props.onClick(e.target.name)}
        >
          -
        </button>

        <button
          className="btn"
          name="4"
          onClick={e => this.props.onClick(e.target.name)}
        >
          4
        </button>
        <button
          className="btn"
          name="5"
          onClick={e => this.props.onClick(e.target.name)}
        >
          5
        </button>
        <button
          className="btn"
          name="6"
          onClick={e => this.props.onClick(e.target.name)}
        >
          6
        </button>
        <button
          className="btn"
          name="+"
          onClick={e => this.props.onClick(e.target.name)}
        >
          +
        </button>

        <button
          className="btn"
          name="1"
          onClick={e => this.props.onClick(e.target.name)}
        >
          1
        </button>
        <button
          className="btn"
          name="2"
          onClick={e => this.props.onClick(e.target.name)}
        >
          2
        </button>
        <button
          className="btn"
          name="3"
          onClick={e => this.props.onClick(e.target.name)}
        >
          3
        </button>

        <button
          className="btn zero"
          name="0"
          onClick={e => this.props.onClick(e.target.name)}
        >
          0
        </button>
        <button
          className="btn "
          name="."
          onClick={e => this.props.onClick(e.target.name)}
        >
          .
        </button>
        <button
          className="btn equal"
          name="="
          onClick={e => this.props.onClick(e.target.name)}
        >
          =
        </button>
      </div>
    );
  }
}

export default Buttons;
