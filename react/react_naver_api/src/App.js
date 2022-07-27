import { useState } from "react";
import React from "react";
import axios from "axios";
import Cafe from "./Cafe";
import Image from "./Image";
import styled from "styled-components";
import Blog from "./Blog";
import News from "./News";

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
    :placeholder {
      color: #ccc;
    }
    :hover {
      background-color: skyblue;
      border-line: ;
    }
  }
`;

const App = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState("");
  const [search, setSearch] = useState(null);

  const NaverClienetId = "0_C0gO6RfZqeUrupKHsU";
  const NaverClientSecret = "JocrPfZsxe";

  const onClick = async (urls) => {
    const url = urls + search;
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
    console.log(search);
  };

  const categories = (e) => {
    setPage(e.target.value);
    const urls = `v1/search/${e.target.value}?query=`;
    console.log("urls : " + urls);
    onClick(urls);
  };
  return (
    <div>
      <LayoutBlock>
        <div>
          <input
            placeholder="검색어를 입력하세요"
            name="search"
            value={search}
            onChange={onChange}
            required
            autoFocus
          />
          {/* <button onClick={onClick}>🔎</button> */}
        </div>
        <div className="btn">
          <button value="news" onClick={categories}>
            뉴스
          </button>
          <button value="blog" onClick={categories}>
            블로그
          </button>
          <button value="cafearticle" onClick={categories}>
            카페
          </button>
          <button value="image" onClick={categories}>
            이미지
          </button>
        </div>
        <hr />
      </LayoutBlock>
      <div>
        {console.log("data : " + data)}
        {console.log("page : " + page)}
        {page == "cafearticle"
          ? data.map((items) => <Cafe key={items.link} items={items} />)
          : page == "image"
          ? data.map((items) => <Image key={items.link} items={items} />)
          : page == "blog"
          ? data.map((items) => <Blog key={items.link} items={items} />)
          : page == "news"
          ? data.map((items) => <News key={items.link} items={items} />)
          : null}
      </div>
    </div>
  );
};

export default App;
