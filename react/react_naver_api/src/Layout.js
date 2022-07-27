import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import axios from "axios";

const Layout = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(null);
  const [search, setSearch] = useState();
  // const navigate = useNavigate();

  const NaverClienetId = "0_C0gO6RfZqeUrupKHsU";
  const NaverClientSecret = "JocrPfZsxe";

  const onClick = (page) => {
    console.log(search);
    console.log(page);
    const url = "";
    if (page == null) {
      url = "news";
    } else {
      url = `v1/search/${page}?query=${search}`;
    }
    axios
      .get(url, {
        params: {
          start: 1, //검색 시작 위치
          display: 5, // 가져올 이미지 갯수
          sort: "sim", //정렬 유형 (유사도)
        },
        headers: {
          "X-Naver-Client-Id": NaverClienetId,
          "X-Naver-Client-Secret": NaverClientSecret,
        },
      })
      .then((response) => {
        setData(response.data);
      });
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onKeyPress = (e) => {};

  const news = () => {
    setPage("news");
    onClick(page);
    // navigate("/news");
  };
  const blog = () => {
    setPage("blog");
    onClick(page);
    // navigate("/blog");
  };
  const cafe = () => {
    setPage("cafearticle");
    onClick(page);
    // navigate("/cafearticle");
  };
  const image = () => {
    setPage("image");
    onClick(page);
    // navigate("/image");
  };

  return (
    <div>
      <header>
        <div>
          <input
            placeholder="검색어를 입력하세요"
            name="search"
            onKeyPress={onKeyPress}
            value={search}
            onChange={onChange}
            required
            autoFocus
          />
          <button onClick={onClick}>🔎</button>
        </div>
        <button onClick={news}>뉴스</button>
        <button onClick={blog}>블로그</button>
        <button onClick={cafe}>카페</button>
        <button onClick={image}>이미지</button>
      </header>
      <div>
        {data && (
          <textarea
            rows={7}
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          />
        )}
      </div>
    </div>
  );
};

export default Layout;
