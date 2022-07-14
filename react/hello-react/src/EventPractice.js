import { Component } from "react";
import { useState } from "react";
// import EventPractice from './EventPractice';

// // state input 128p
// class EventPractice extends Component {
//   state = {
//     message: "",
//   };
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력하세요"
//           value={this.state.message}
//           onChange={(e) => {
//             this.setState({ message: e.target.value });
//           }}
//         />
//         <button
//           onClick={() => {
//             alert(this.state.message);
//             this.setState({
//               message: "",
//             });
//           }}
//         >
//           확인
//         </button>
//       </div>
//     );
//   }
// }

// //handler bind 130p
// class EventPractice extends Component {
//   state = {
//     message: "",
//   };
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleChange(e) {
//     this.setState({
//       message: e.target.value,
//     });
//   }
//   handleClick() {
//     alert(this.state.message);
//     this.setState({
//       message: "",
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력하세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>확인 </button>
//       </div>
//     );
//   }
// }

// //handle 화살표함수로 변환 132p
// class EventPractice extends Component {
//   state = {
//     message: "",
//   };
//   handleChange = (e) => {
//     this.setState({
//       message: e.target.value,
//     });
//   };
//   handleClick = () => {
//     alert(this.state.message);
//     this.setState({
//       message: "",
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력하세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>확인 </button>
//       </div>
//     );
//   }
// }

// //handle input 2개 사용 132p
// class EventPractice extends Component {
//   state = {
//     id: "",
//     username: "",
//     message: "",
//   };
//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   handleClick = () => {
//     alert(
//       this.state.id + ": " + this.state.username + ": " + this.state.message
//     );
//     this.setState({
//       username: "",
//       message: "",
//       id: "",
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="id"
//           placeholder="아이디"
//           value={this.state.id}
//           onChange={this.handleChange}
//         />
//         <br />
//         <input
//           type="text"
//           name="username"
//           placeholder="사용자명"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />
//         <br />
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력하세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//         />
//         <br />
//         <button onClick={this.handleClick}>확인 </button>
//       </div>
//     );
//   }
// }

// //handle onkeypress 136p
// class EventPractice extends Component {
//   state = {
//     id: "",
//     username: "",
//     message: "",
//   };
//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   handleClick = () => {
//     alert(
//       this.state.id + ": " + this.state.username + ": " + this.state.message
//     );
//     this.setState({
//       username: "",
//       message: "",
//       id: "",
//     });
//   };
//   handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       this.handleClick();
//     }
//   };
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="id"
//           placeholder="아이디"
//           value={this.state.id}
//           onChange={this.handleChange}
//         />
//         <br />
//         <input
//           type="text"
//           name="username"
//           placeholder="사용자명"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />
//         <br />
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력하세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <br />
//         <button onClick={this.handleClick}>확인 </button>
//       </div>
//     );
//   }
// }

// // class 함수로 변환138p
// const EventPractice = () => {
//   const [username, setUsername] = useState("");
//   const [message, setMessage] = useState("");
//   const onChangeUsername = (e) => setUsername(e.target.value);
//   const onChangeMessage = (e) => setMessage(e.target.value);
//   const onClick = () => {
//     alert(username + " : " + message);
//     setUsername("");
//     setMessage("");
//   };
//   const onKeyPress = (e) => {
//     if (e.key === "Enter") {
//       onClick();
//     }
//   };
//   return (
//     <div>
//       <h1>이벤트 연습</h1>
//       <input
//         type="text"
//         name="username"
//         placeholder="사용자명"
//         value={username}
//         onChange={onChangeUsername}
//       />
//       <br />
//       <input
//         type="text"
//         name="message"
//         placeholder="아무거나 입력하세요"
//         value={message}
//         onChange={onChangeMessage}
//         onKeyPress={onKeyPress}
//       />
//       <br />
//       <button onClick={onClick}>확인 </button>
//     </div>
//   );
// };

// class 함수로 변환 input 한번에 처리 139p
const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + " : " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <br />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <br />
      <button onClick={onClick}>확인 </button>
    </div>
  );
};

export default EventPractice;
