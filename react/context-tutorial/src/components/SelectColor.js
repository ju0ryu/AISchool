import React from "react";
import { ColorConsumer } from "../contexts/color";
import { Component } from "react";
import ColorContext from "../contexts/color";
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

class SelectColor extends Component {
  static contextType = ColorContext;

  handlerSetColor = (color) => {
    this.context.actions.setColor(color);
  };
  handlerSetSubColor = (subcolor) => {
    this.context.actions.setSubcolor(subcolor);
  };
  render() {
    return (
      <div>
        <h2>색상을 선택하세요</h2>
        <div style={{ display: "flex" }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: "24px",
                height: "24px",
                cursor: "pointer",
              }}
              onClick={() => this.handlerSetColor(color)}
              onContextMenu={(e) => {
                e.preventDefault();
                this.handlerSetSubColor(color);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

// const SelectColor = () => {
//   //   return (
//   //     <div>
//   //       <h2>색상을 선택하세요</h2>
//   //       <div style={{ display: "flex" }}>
//   //         {colors.map((color) => (
//   //           <div
//   //             key={color}
//   //             style={{
//   //               background: color,
//   //               width: "24px",
//   //               height: "24px",
//   //               cursor: "pointer",
//   //             }}
//   //           />
//   //         ))}
//   //       </div>
//   //       <hr />
//   //     </div>
//   //   );
//   return (
//     <div>
//       <h2>색상을 선택하세요</h2>
//       <ColorConsumer>
//         {({ actions }) => (
//           <div style={{ display: "flex" }}>
//             {colors.map((color) => (
//               <div
//                 key={color}
//                 style={{
//                   background: color,
//                   width: "24px",
//                   height: "24px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => actions.setColor(color)}
//                 onContextMenu={(e) => {
//                   e.preventDefault();
//                   actions.setSubcolor(color);
//                 }}
//               />
//             ))}
//           </div>
//         )}
//       </ColorConsumer>
//     </div>
//   );
// };

export default SelectColor;
