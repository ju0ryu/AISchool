import { Component } from "react";
// // state 사용법 104p
// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       number: 0,
//     };
//   }
//   render() {
//     const { number } = this.state;
//     return (
//       <div>
//         <h1>{number}</h1>
//         <button
//           onClick={() => {
//             this.setState({ number: number + 1 });
//           }}
//         >
//           +1
//         </button>
//       </div>
//     );
//   }
// }
//state 사용법2 108p
class Counter extends Component {
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            // this.setState((prevState) => {
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });
            // this.setState((prevState) => ({
            //   number: prevState.number + 1,
            // }));
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("setState가 호출되었습니다.");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
