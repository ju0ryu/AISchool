import { useState } from "react";
import App from "./App";
//   const names = ["눈", "얼음", "눈사람", "바람"];

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈" },
    { id: 2, text: "아이" },
    { id: 3, text: "눈사람" },
    { id: 4, text: "눈사자" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul> {nameList}</ul>
    </>
  );
};
export default IterationSample;
