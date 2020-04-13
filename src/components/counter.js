import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    names: ["Dereck", "Tanaka", "Chamboko", "Tafadzwa"],
    myClass: "",
  };

  constructor() {
    super();
    this.myEventhandler = this.myEventhandler.bind(this);
  }
  myEventhandler() {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
    if (this.state.count === 0) {
      this.setState({ count: 1 });
      this.setState({ myClass: "badge badge-danger m-2" });
    }

    if (this.state.count === 1) {
      this.setState({ count: 2 });
      this.setState({ myClass: "badge badge-success m-2" });
    }

    if (this.state.count === 2) {
      this.setState({ count: 3 });
      this.setState({ myClass: "badge badge-warning m-2" });
    }

    if (this.state.count === 3) {
      this.setState({ count: 4 });
      this.setState({ myClass: "badge badge-primary m-2" });
    }
  }
  render() {
    return (
      <React.Fragment>
        <span className={this.state.myClass} style={{ fontSize: 30 }}>
          {(this, this.state.count)}
        </span>
        <button className="btn btn-success" onClick={this.myEventhandler}>
          increment
        </button>
        <ul>
          {this.state.names.map((myName) => (
            <li key={myName}>{myName}</li>
          ))}
        </ul>
        <input value={this.state.count}></input>
      </React.Fragment>
    );
  }
}

export default Counter;
