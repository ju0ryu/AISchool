import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import SassComponent from "./SassComponent";
import { Component } from "react";
import CSSModule from "./CSSModule";
import StyledComponent from "./StyledComponent";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <SassComponent />
//       </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <CSSModule />
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        <StyledComponent />
      </div>
    );
  }
}

export default App;
