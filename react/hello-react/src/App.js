import logo from "./logo.svg";
import "./App.css";
import { Component, Fragment } from "react";
import Say from "./Say";
import EventPractice from "./EventPractice";
//import MyComponent from "./MyComponent";
//import Counter from "./counter";

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

// //104p
// const App = () => {
//   return <Counter />;
// };

// //112p
// const App = () => {
//   return <Say />;
// };

const App = () => {
  return <EventPractice />;
};

export default App;
