import { ColorConsumer } from "../contexts/color";
import { useContext } from "react";
import ColorContext from "../contexts/color";
import React from "react";

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    // <ColorConsumer>
    //   {({ state }) => (
    <div>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor,
        }}
      />
    </div>
    //   )}
    // </ColorConsumer>
  );
};

export default ColorBox;
