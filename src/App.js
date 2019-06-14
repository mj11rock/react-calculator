import React, { Component } from "react";
import Buttons from "./calculator/buttons";
import Display from "./calculator/dispay";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    };
  }
  reset = () => {
    this.setState({
      result: ""
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };
  onClick = button => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <Display result={this.state.result} />
          <Buttons onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
