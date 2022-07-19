import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import SassComponent from "./SassComponent";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <SassComponent />
      </div>
    );
  }
}

export default App;
