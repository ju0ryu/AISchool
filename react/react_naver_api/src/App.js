import React from "react";
import { useState } from "react";
import axios from "axios";
import Layout from "./Layout";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

// const App = () => {
//   const [data, setData] = useState(null);

//   const NaverClienetId = "0_C0gO6RfZqeUrupKHsU";
//   const NaverClientSecret = "JocrPfZsxe";

//   const onClick = () => {
//     axios
//       .get("v1/search/blog", {
//         params: {
//           query: "react", //이미지 검색 텍스트
//           start: 1, //검색 시작 위치
//           display: 5, // 가져올 이미지 갯수
//           sort: "sim", //정렬 유형 (유사도)
//         },
//         headers: {
//           "X-Naver-Client-Id": NaverClienetId,
//           "X-Naver-Client-Secret": NaverClientSecret,
//         },
//       })
//       .then((response) => {
//         setData(response.data);
//       });
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && (
//         <textarea
//           rows={7}
//           value={JSON.stringify(data, null, 2)}
//           readOnly={true}
//         />
//       )}
//     </div>
//   );
// };

const App = (params) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
};

export default App;
