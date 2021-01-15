import React, { Component } from 'react';

class ArrayDestructing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ count: this.state.count + 1 });
  }
  DecreaseItem = () => {
    this.setState({ count: this.state.count - 1 });
  }
  Hide = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <h1>Feedback about policyBazar</h1>
        <button onClick={this.IncrementItem}>Click to increase rating</button>
        <button onClick={this.DecreaseItem}>Click to  decrease rating</button>
        <button onClick={this.Hide}>
          {this.state.show ? 'Hide number' : 'Show number'}
        </button>
        { this.state.show ? <h2>{this.state.count}</h2> : ''}
      </div>
    );
  }
}
export default ArrayDestructing;