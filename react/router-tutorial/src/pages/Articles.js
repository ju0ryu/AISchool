import { NavLink, Link, Outlet } from "react-router-dom";
import Article from "./Article";

// const Articles = () => {
//   return (
//     <div>
//           <Outlet /> {/* 중첩된 내용을 출력해주는 부분 */ }
//       <ul>
//         <li>
//           <Link to="/articles/1">게시글1</Link>
//         </li>
//         <li>
//           <Link to="/articles/2">게시글2</Link>
//         </li>
//         <li>
//           <Link to="/articles/3">게시글3</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };
const Articles = () => {
  return (
    <div>
      <Outlet /> {/* 중첩된 내용을 출력해주는 부분 */}
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>
    </div>
  );
};
const ArticleItem = ({ id }) => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };
  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};

export default Articles;
