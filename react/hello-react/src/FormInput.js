import React from "react";
import { useState } from "react";
import { Component } from "react";

// const FormInput = () => {
//   const [form, setForm] = useState({
//     id: "",
//     pw: "",
//     jumin1: "",
//     jumin2: "",
//     tel1: "",
//     tel2: "",
//     tel3: "",
//     gender: "",
//   });
//   const { id, pw, jumin1, jumin2, tel1, tel2, tel3, gender } = form;
//   const onChange = (e) => {
//     const copyForm = {
//       ...form,
//       [e.target.name]: e.target.value,
//     };
//     setForm(copyForm);
//   };
//   const onClick = () => {
//     alert(
//       `아이디 : ${id}\n
//       비밀번호 : ${pw}\n
//       주민번호 : ${jumin1}-${jumin2}\n
//       전화번호 : ${tel1}-${tel2}-${tel3}\n
//       성별 : ${gender}\n
//       `
//     );
//     setForm({
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
//   return (
//     <div>
//       <table align="center" border="1">
//         <tr>
//           <td width="110">아이디</td>
//           <td width="400">
//             <input
//               type="text"
//               name="id"
//               size="30"
//               value={id}
//               onChange={onChange}
//               placeholder="최소6~10, 숫자와 알파벳만 사용"
//             />
//           </td>
//         </tr>
//         <tr>
//           <td width="110">비밀번호</td>
//           <td width="400">
//             <input
//               type="password"
//               name="pw"
//               size="30"
//               value={pw}
//               onChange={onChange}
//               placeholder="최소6~10, 숫자와 알파벳만 사용"
//             />
//           </td>
//         </tr>
//         <tr>
//           <td width="110">주민등록번호</td>
//           <td width="400">
//             <input
//               type="text"
//               name="jumin1"
//               size="6"
//               maxLength="6"
//               value={jumin1}
//               onChange={onChange}
//             />
//             {" - "}
//             <input
//               type="password"
//               name="jumin2"
//               size="7"
//               maxLength="7"
//               value={jumin2}
//               onChange={onChange}
//             />
//           </td>
//         </tr>
//         <tr>
//           <td>전화번호</td>
//           <td>
//             <input
//               type="tel"
//               name="tel1"
//               size="3"
//               maxLength="3"
//               value={tel1}
//               onChange={onChange}
//             />
//             {" - "}
//             <input
//               type="tel"
//               name="tel2"
//               size="4"
//               maxLength="4"
//               value={tel2}
//               onChange={onChange}
//             />
//             {" - "}
//             <input
//               type="tel"
//               name="tel3"
//               size="4"
//               maxLength="4"
//               value={tel3}
//               onChange={onChange}
//             />
//           </td>
//         </tr>
//         <tr>
//           <td width="110">성별</td>
//           <td width="400">
//             <input
//               type="radio"
//               name="gender"
//               value="남자"
//               onChange={onChange}
//             />
//             남자
//             <input
//               type="radio"
//               name="gender"
//               value="여자"
//               onChange={onChange}
//             />{" "}
//             여자
//           </td>
//         </tr>
//         <tr>
//           <td colSpan="2" align="center" width="500">
//             <input type="button" value="제출" onClick={onClick} />
//           </td>
//         </tr>
//       </table>
//     </div>
//   );
// };

class FormInput extends Component {
  state = {
    id: "",
    pw: "",
    jumin1: "",
    jumin2: "",
    tel1: "",
    tel2: "",
    tel3: "",
    gender: "",
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onClick = () => {
    alert(
      `아이디 : ${this.state.id}\n
      비밀번호 : ${this.state.pw}\n
      주민번호 : ${this.state.jumin1}-${this.state.jumin2}\n
      전화번호 : ${this.state.tel1}-${this.state.tel2}-${this.state.tel3}\n
      성별 : ${this.state.gender}\n      
      `
    );
    this.setState({
      id: "",
      pw: "",
      jumin1: "",
      jumin2: "",
      tel1: "",
      tel2: "",
      tel3: "",
      gender: "",
    });
  };
  render() {
    return (
      <div>
        <table align="center" border="1">
          <tr>
            <td width="110">아이디</td>
            <td width="400">
              <input
                type="text"
                name="id"
                size="30"
                value={this.state.id}
                onChange={this.onChange}
                placeholder="최소6~10, 숫자와 알파벳만 사용"
              />
            </td>
          </tr>
          <tr>
            <td width="110">비밀번호</td>
            <td width="400">
              <input
                type="password"
                name="pw"
                size="30"
                value={this.state.pw}
                onChange={this.onChange}
                placeholder="최소6~10, 숫자와 알파벳만 사용"
              />
            </td>
          </tr>
          <tr>
            <td width="110">주민등록번호</td>
            <td width="400">
              <input
                type="text"
                name="jumin1"
                size="6"
                maxLength="6"
                value={this.state.jumin1}
                onChange={this.onChange}
              />
              {" - "}
              <input
                type="password"
                name="jumin2"
                size="7"
                maxLength="7"
                value={this.state.jumin2}
                onChange={this.onChange}
              />
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>
              <input
                type="tel"
                name="tel1"
                size="3"
                maxLength="3"
                value={this.state.tel1}
                onChange={this.onChange}
              />
              {" - "}
              <input
                type="tel"
                name="tel2"
                size="4"
                maxLength="4"
                value={this.state.tel2}
                onChange={this.onChange}
              />
              {" - "}
              <input
                type="tel"
                name="tel3"
                size="4"
                maxLength="4"
                value={this.state.tel3}
                onChange={this.onChange}
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
                onChange={this.onChange}
              />
              남자
              <input
                type="radio"
                name="gender"
                value="여자"
                onChange={this.onChange}
              />{" "}
              여자
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center" width="500">
              <input type="button" value="제출" onClick={this.onClick} />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default FormInput;
