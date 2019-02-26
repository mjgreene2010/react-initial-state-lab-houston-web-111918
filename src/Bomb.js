import React, { Component } from "react";

export default class Bomb extends Component {
  state = {
    secondsLeft: this.props.initialCount
  };

  timeBomb = () => {
    if (this.state.secondsLeft !== 0) {
      return `${this.state.secondsLeft} seconds left before I go boom!`;
    } else if (this.state.secondsLeft === 0) {
      return "Boom!";
    }
  };

  render() {
    return <div>{this.timeBomb()}</div>;
  }
}
