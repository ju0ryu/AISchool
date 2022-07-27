import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import axios from "axios";
import Cafe from "./Cafe";
import Image from "./Image";
import styled from "styled-components";
import Blog from "./Blog";

const LayoutBlock = styled.div`
  padding: 1rem;
  width: 80%;
  margin: 0 auto;
  input {
    display: block;
    width: 50%;
    margin: 0 auto;
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.5rem;
    border-line: solid 1px #ccc;
  }
  .btn {
    text-align: center;
    margin: 0 auto;
    width: 55%;
  }
  button {
    display: inline-block;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    border: none;
    width: 25%;
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    :hover {
      background-color: skyblue;
      border-line: ;
    }
  }
`;

const Layout = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState("");
  const [search, setSearch] = useState();
  // const navigate = useNavigate();

  const NaverClienetId = "0_C0gO6RfZqeUrupKHsU";
  const NaverClientSecret = "JocrPfZsxe";

  const onClick = async (page) => {
    const url = `v1/search/${page}?query=${search}`;
    try {
      const response = await axios.get(url, {
        params: {
          start: 1, //검색 시작 위치
          display: 5, // 가져올 이미지 갯수
          sort: "sim", //정렬 유형 (유사도)
        },
        headers: {
          "X-Naver-Client-Id": NaverClienetId,
          "X-Naver-Client-Secret": NaverClientSecret,
        },
      });
      setData(response.data.items);
    } catch (e) {
      console.log(e);
    }
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
      <LayoutBlock>
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
          {/* <button onClick={onClick}>🔎</button> */}
        </div>
        <div className="btn">
          <button onClick={news}>뉴스</button>
          <button onClick={blog}>블로그</button>
          <button onClick={cafe}>카페</button>
          <button onClick={image}>이미지</button>
        </div>
        <hr />
      </LayoutBlock>
      <div>
        {console.log(data)}
        {console.log(page)}
        {page == "cafearticle"
          ? data.map((items) => <Cafe key={items.link} items={items} />)
          : page == "image"
          ? data.map((items) => <Image key={items.link} items={items} />)
          : data.map((items) => <Blog key={items.link} items={items} />)}
      </div>
    </div>
  );
};

export default Layout;
