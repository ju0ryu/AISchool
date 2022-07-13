import PropTypes from "prop-types";
import { Component } from "react";
// //88p
// const MyComponent = () => {
//   return <div>나의 새로운 컴포넌트</div>;
// };

// //props 92p
// const MyComponent = (props) => {
//   return <div>안녕하세요. 제이름은 {props.name}입니다.</div>;
// };

// // props children 불러오기 95p
// const MyComponent = (props) => {
//   return (
//     <div>
//       안녕하세요 제 이름은 {props.name}입니다. <br />
//       children 값은 {props.children} 입니다.
//     </div>
//   );
// };

// //비구조화 할당 문법96p
// const MyComponent = (props) => {
//   const { name, children } = props;
//   return (
//     <div>
//       안녕하세요 제 이름은 {name}입니다. <br />
//       children 값은 {children} 입니다.
//     </div>
//   );
// };

// // isRequired 100p
// const MyComponent = (props) => {
//   const { name, children, favoriteNumber } = props;
//   return (
//     <div>
//       안녕하세요 제 이름은 {name}입니다. <br />
//       children 값은 {children} 입니다. <br />
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   );
// };

//클래스 기반 props 102p
class MyComponent extends Component {
  render() {
    const { name, children, favoriteNumber } = this.props;
    return (
      <div>
        안녕하세요 제 이름은 {name}입니다. <br />
        children 값은 {children} 입니다. <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

//props 기본설정 94p
MyComponent.defaultProps = {
  name: "기본이름",
};
//propType 검증 97p
MyComponent.prototype = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired, // 필수기입 100p
};

export default MyComponent;
