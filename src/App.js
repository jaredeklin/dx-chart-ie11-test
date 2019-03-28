
import React, { Component } from "react";
import "./App.css";
import DemoChart from "./DemoChart";

class App extends Component {
  state = {
    data: [
      {
        name: "Email Archive",
        size: 2722839,
        count: 11
      },
      {
        name: "Spreadsheet",
        size: 102209,
        count: 3
      },
      {
        name: "Document",
        size: 841129,
        count: 12
      },
      {
        name: "Presentation",
        size: 3886076,
        count: 2
      },
      {
        name: "Container",
        size: 208930754,
        count: 27
      },
      {
        name: "Image",
        size: 35148559,
        count: 405
      },
      {
        name: "Graphics",
        size: 289957,
        count: 69
      },
      {
        name: "Video",
        size: 62508,
        count: 12
      },
      {
        name: "Text",
        size: 162328,
        count: 30
      },
      {
        name: "Other",
        size: 2076759,
        count: 163
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <DemoChart data={this.state.data} />
      </div>
    );
  }
}

export default App;
