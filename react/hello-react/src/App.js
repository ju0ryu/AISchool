import logo from "./logo.svg";
import "./App.css";
import { Component, Fragment } from "react";
//import Say from "./Say";
//import EventPractice from "./EventPractice";
//import MyComponent from "./MyComponent";
//import Counter from "./counter";
import FormInput from "./FormInput";
// import ValidationSample from "./ValidationSample";
// import RefSample from "./RefSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";

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

// // class기반
// class App extends Component {
//   render() {
//     const name = "react";
//     return <div className="react">{name}</div>;
//   }
// }

// //화살표 함수 92p
// const App = () => {
//   return <MyComponent name="React" />; //props 값을 적지않을시 기본설정값 출력
// };

// // children 95p
// const App = () => {
//   return <MyComponent name={"react"}>리액트</MyComponent>;
// };

// //is required 100p
// const App = () => {
//   return (
//     <MyComponent name={"react"} favoriteNumber={1}>
//       리액트
//     </MyComponent>
//   );
// };

// //Counter
// const App = () => {
//   return <Counter />;
// };

// //Say
// const App = () => {
//   return <Say />;
// };
// // EventPractice
// const App = () => {
//   return <EventPractice />;
// };

// const App = () => {
//   return <ValidationSample />;
// };

// //RefSample
// const App = () => {
//   return <RefSample />;
// };

// //ScrollBox
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
//         <button onClick={() => this.scrollBox.scrollToBottom()}>
//           맨밑으로
//         </button>
//       </div>
//     );
//   }
// }

// const App = () => {
//   return <FormInput />;
// };

class App extends Component {
  render() {
    return <IterationSample />;
  }
}

export default App;
