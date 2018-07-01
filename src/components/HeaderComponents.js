import React, { Component } from "react";
class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header
        style={{
          backgroundColor: "#e12c6a",
          marginTop: 0,
          padding: 2,
          paddingLeft: 20
        }}
      >
        <h1
          style={{
            color: "#fff",
            marginTop: 15,
            marginBottom: 15,
            fontSize: 25
          }}
        >
          TODO LIST ::
        </h1>
      </header>
    );
  }
}

export default HeaderComponent;
