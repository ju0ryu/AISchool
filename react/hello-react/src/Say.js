import { useState } from "react";

// //useState 112p
// const Say = () => {
//   const [meessage, setMessage] = useState("");
//   const onClickEnter = () => setMessage("hello");
//   const onClickLeave = () => setMessage("bye");

//   return (
//     <div>
//       <button onClick={onClickEnter}>입장</button>
//       <button onClick={onClickLeave}>퇴장</button>
//       <h1>{meessage}</h1>
//     </div>
//   );
// };

// 다중 useState 114p
const Say = () => {
  const [number, setNumber] = useState(0);
  const onClickEnter = () => setNumber(number + 1);

  const [color, SetColor] = useState("black");

  return (
    <div>
      <button style={{ color: "blue" }} onClick={() => SetColor("blue")}>
        blue
      </button>
      <button style={{ color: "red" }} onClick={() => SetColor("red")}>
        red
      </button>
      <button style={{ color: "green" }} onClick={() => SetColor("green")}>
        green
      </button>
      <h1 style={{ color }}>{number}</h1>
      <button onClick={onClickEnter}>+</button>
    </div>
  );
};
export default Say;
