import { useState, useReducer, useRef, Component } from "react";

const initForm = {
  id: "",
  pw: "",
  jumin1: "",
  jumin2: "",
  tel1: "",
  tel2: "",
  tel3: "",
  gender: "",
  email1: "",
  email2: "",
};

function reducer(state, action) {
  if (action.name == "btn") {
    return initForm;
  } else {
    return {
      ...state,
      [action.name]: action.value,
    };
  }
}

const FormInput = () => {
  const [state, dispatch] = useReducer(reducer, initForm);
  const { id, pw, jumin1, jumin2, tel1, tel2, tel3, gender, email1, email2 } =
    state;
  const input = useRef([]);
  const onChange = (e) => {
    dispatch(e.target);
  };
  const onClick = (e) => {
    alert(
      `아이디 : ${id}
      비밀번호 : ${pw}
      주민번호 : ${jumin1}-${jumin2}
      전화번호 : ${tel1}-${tel2}-${tel3}
      성별 : ${gender}
      이메일 : ${email1}@${email2}
      `
    );
    dispatch(e.target);
  };

  const onKeypress = (e) => {
    if (e.key == "Enter") {
      for (var i = 1; i < input.current.length; i++) {
        input.current[i].focus();
      }
    }
  };
  return (
    <div>
      <table align="center" border="1">
        <tr>
          <td width="110">아이디</td>
          <td width="400">
            <input
              onKeyPress={onKeypress}
              ref={(el) => (input.current[0] = el)}
              type="text"
              name="id"
              size="30"
              value={id}
              onChange={onChange}
              placeholder="최소6~10, 숫자와 알파벳만 사용"
            />
          </td>
        </tr>
        <tr>
          <td width="110">비밀번호</td>
          <td width="400">
            <input
              onKeyPress={onKeypress}
              ref={(el) => (input.current[1] = el)}
              type="password"
              name="pw"
              size="30"
              value={pw}
              onChange={onChange}
              placeholder="최소6~10, 숫자와 알파벳만 사용"
            />
          </td>
        </tr>
        <tr>
          <td width="110">주민등록번호</td>
          <td width="400">
            <input
              onKeyPress={onKeypress}
              ref={(el) => (input.current[2] = el)}
              type="text"
              name="jumin1"
              size="6"
              maxLength="6"
              value={jumin1}
              onChange={onChange}
            />
            {" - "}
            <input
              onKeyPress={onKeypress}
              ref={(el) => (input.current[3] = el)}
              type="password"
              name="jumin2"
              size="7"
              maxLength="7"
              value={jumin2}
              onChange={onChange}
            />
          </td>
        </tr>
        <tr>
          <td>전화번호</td>
          <td>
            <input
              onKeyPress={onKeypress}
              ref={(el) => (input.current[4] = el)}
              type="tel"
              name="tel1"
              size="3"
              maxLength="3"
              value={tel1}
              onChange={onChange}
            />
            {" - "}
            <input
              onKeyPress={onKeypress}
              ref={(el) => (input.current[5] = el)}
              type="tel"
              name="tel2"
              size="4"
              maxLength="4"
              value={tel2}
              onChange={onChange}
            />
            {" - "}
            <input
              onKeyPress={onKeypress}
              ref={(el) => (input.current[6] = el)}
              type="tel"
              name="tel3"
              size="4"
              maxLength="4"
              value={tel3}
              onChange={onChange}
            />
          </td>
        </tr>
        <tr>
          <td width="110">성별</td>
          <td width="400">
            <input
              type="radio"
              name="gender"
              value="남자"
              onChange={onChange}
            />
            남자
            <input
              type="radio"
              name="gender"
              value="여자"
              onChange={onChange}
            />{" "}
            여자
          </td>
        </tr>
        <tr>
          <td width="110">이메일</td>
          <td width="400">
            <input type="text" name="email1" size="10" onChange={onChange} />@
            <select name="email2" onChange={onChange}>
              <option value="이메일을 입력하세요">메일주소선택</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="naver.com">naver.com</option>
              <option value="nate.com">nate.com</option>
            </select>
          </td>
        </tr>
        <tr>
          <td colSpan="2" align="center" width="500">
            <input
              onKeyPress={onKeypress}
              name="btn"
              type="button"
              value="제출"
              onClick={onClick}
              ref={(el) => (input.current[7] = el)}
            />
          </td>
        </tr>
      </table>
    </div>
  );
};
export default FormInput;

// class FormInput extends Component {
//   state = {
//     id: "",
//     pw: "",
//     jumin1: "",
//     jumin2: "",
//     tel1: "",
//     tel2: "",
//     tel3: "",
//     gender: "",
//   };
//   onkeypress = (e) => {
//     console.log(e);
//     if (e.key === "Enter") {
//       if (e.target.name == "id") {
//         this.inputPw.focus();
//       } else if (e.target.name == "pw") {
//         this.inputJumin1.focus();
//       } else if (e.target.name == "jumin1") {
//         this.inputJumin2.focus();
//       } else if (e.target.name == "jumin2") {
//         this.inputTel1.focus();
//       } else if (e.target.name == "tel1") {
//         this.inputTel2.focus();
//       } else if (e.target.name == "tel2") {
//         this.inputTel3.focus();
//       } else if (e.target.name == "tel3") {
//         this.inputBtn.focus();
//       }
//     }
//   };
//   onChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   onClick = () => {
//     alert(
//       `아이디 : ${this.state.id}\n
//       비밀번호 : ${this.state.pw}\n
//       주민번호 : ${this.state.jumin1}-${this.state.jumin2}\n
//       전화번호 : ${this.state.tel1}-${this.state.tel2}-${this.state.tel3}\n
//       성별 : ${this.state.gender}\n
//       `
//     );
//     this.setState({
//       id: "",
//       pw: "",
//       jumin1: "",
//       jumin2: "",
//       tel1: "",
//       tel2: "",
//       tel3: "",
//       gender: "",
//     });
//   };
//   render() {
//     return (
//       <div>
//         <table align="center" border="1">
//           <tr>
//             <td width="110">아이디</td>
//             <td width="400">
//               <input
//                 ref={(ref) => (this.inputId = ref)}
//                 onKeyPress={this.onkeypress}
//                 type="text"
//                 name="id"
//                 size="30"
//                 value={this.state.id}
//                 onChange={this.onChange}
//                 placeholder="최소6~10, 숫자와 알파벳만 사용"
//               />
//             </td>
//           </tr>
//           <tr>
//             <td width="110">비밀번호</td>
//             <td width="400">
//               <input
//                 ref={(ref) => (this.inputPw = ref)}
//                 onKeyPress={this.onkeypress}
//                 type="password"
//                 name="pw"
//                 size="30"
//                 value={this.state.pw}
//                 onChange={this.onChange}
//                 placeholder="최소6~10, 숫자와 알파벳만 사용"
//               />
//             </td>
//           </tr>
//           <tr>
//             <td width="110">주민등록번호</td>
//             <td width="400">
//               <input
//                 ref={(ref) => (this.inputJumin1 = ref)}
//                 onKeyPress={this.onkeypress}
//                 type="text"
//                 name="jumin1"
//                 size="6"
//                 maxLength="6"
//                 value={this.state.jumin1}
//                 onChange={this.onChange}
//               />
//               {" - "}
//               <input
//                 ref={(ref) => (this.inputJumin2 = ref)}
//                 onKeyPress={this.onkeypress}
//                 type="password"
//                 name="jumin2"
//                 size="7"
//                 maxLength="7"
//                 value={this.state.jumin2}
//                 onChange={this.onChange}
//               />
//             </td>
//           </tr>
//           <tr>
//             <td>전화번호</td>
//             <td>
//               <input
//                 ref={(ref) => (this.inputTel1 = ref)}
//                 onKeyPress={this.onkeypress}
//                 type="tel"
//                 name="tel1"
//                 size="3"
//                 maxLength="3"
//                 value={this.state.tel1}
//                 onChange={this.onChange}
//               />
//               {" - "}
//               <input
//                 ref={(ref) => (this.inputTel2 = ref)}
//                 onKeyPress={this.onkeypress}
//                 type="tel"
//                 name="tel2"
//                 size="4"
//                 maxLength="4"
//                 value={this.state.tel2}
//                 onChange={this.onChange}
//               />
//               {" - "}
//               <input
//                 ref={(ref) => (this.inputTel3 = ref)}
//                 onKeyPress={this.onkeypress}
//                 type="tel"
//                 name="tel3"
//                 size="4"
//                 maxLength="4"
//                 value={this.state.tel3}
//                 onChange={this.onChange}
//               />
//             </td>
//           </tr>
//           <tr>
//             <td width="110">성별</td>
//             <td width="400">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="남자"
//                 onChange={this.onChange}
//               />
//               남자
//               <input
//                 type="radio"
//                 name="gender"
//                 value="여자"
//                 onChange={this.onChange}
//               />{" "}
//               여자
//             </td>
//           </tr>
//           <tr>
//             <td colSpan="2" align="center" width="500">
//               <input
//                 type="button"
//                 value="제출"
//                 onClick={this.onClick}
//                 ref={(ref) => (this.inputBtn = ref)}
//               />
//             </td>
//           </tr>
//         </table>
//       </div>
//     );
//   }
// }
