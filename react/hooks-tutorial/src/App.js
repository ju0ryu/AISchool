import "./App.css";
import Counter from "./Counter";
import Info from "./Info";
import { useState } from "react";
import FormInput from "./FormInput";
import Average from "./Average";

// //Counter
// const App = () => {
//   return <Counter />;
// };

//Info
// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//         {visible ? "숨기기" : "보이기"}
//       </button>
//       <hr />
//       {visible && <Info />}
//     </div>
//   );
// };

// //Counter
const App = () => {
  return <Info />;
};

// const App = () => {
//   return <FormInput />;
// };

// const App = () => {
//   return <Average />;
// };

export default App;
