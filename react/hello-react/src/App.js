import logo from "./logo.svg";
import "./App.css";
import { Component, Fragment } from "react";

// // 함수기반
// function App() {
//   const name = undefined;
//   return (
//     <>
//       <div className="react">{name || "undefined"}</div>;
//       <br />
//       <input />
//     </>
//   );
// }

// class기반
class App extends Component {
  render() {
    const name = "react";
    return <div className="react">{name}</div>;
  }
}
export default App;
