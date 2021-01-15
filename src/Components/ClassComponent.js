import React, { Component } from 'react';

class ClassComponent extends React.Component {

  constructor(props) {
    super(props);
    this.hello = this.hello.bind(this);
  }
  hello() {
    alert('Thanks for voting');
  }
  render() {
    return (
      <div className="alert">
        <h1 >Visit us</h1>
        <button onClick={this.hello}>
          Click Here
        </button></div>
    );
  }
}

export default ClassComponent;


