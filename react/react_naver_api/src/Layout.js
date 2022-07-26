import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";

const Layout = () => {
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  const onChange = (e) => {
    const updateSearch = {
      ...search,
      [e.target.name]: e.target.value,
    };
    setSearch(updateSearch);
    console.log(search);
    setSearch = "";
  };

  const onKeyPress = (e) => {};

  const news = () => {
    navigate("/news");
  };
  const blog = (params) => {
    navigate("/blog");
  };
  const cafe = (params) => {
    navigate("/cafearticle");
  };
  const image = (params) => {
    navigate("/image");
  };

  return (
    <div>
      <header>
        <input
          placeholder="검색어를 입력하세요"
          name="search"
          onKeyPress={onKeyPress}
          value={search}
          onChange={onChange}
          required
          autoFocus
        />
        <button onClick={news}>뉴스</button>
        <button onClick={blog}>블로그</button>
        <button onClick={cafe}>카페</button>
        <button onClick={image}>이미지</button>
      </header>
    </div>
  );
};

export default Layout;
