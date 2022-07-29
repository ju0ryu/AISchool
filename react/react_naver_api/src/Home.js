import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
const HomeBlock = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    width: 600px;
    .title {
      font-size: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
      }
    }
    .searchInput {
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        width: 100%;
        height: 50px;
        border-radius: 10px;
        padding: 0 10px;
        position: relative;
      }
      .search {
        background: none;
        border: none;
        font-size: 2.3rem;
        position: absolute;
        left: 62%;
        right: 38%;
      }
    }
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      .category {
        margin-top: 10px;
        border: none;
        width: 20%;
        height: 45px;
      }
    }
  }
`;
const Home = () => {
  const [page, setPage] = useState('news');
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState('인터스텔라');
  const [bools, setBools] = useState(false);
  const history = useNavigate();
  const onChange = (e) => {
    setSearch(e.target.value);
    setSearchData(search);
  };

  const categories = (e) => {
    setPage(e.target.value);
    setSearchData(search);
    setBools(true);
  };
  const onClick = () => {
    history('/Search', {
      state: {
        homeSearch: searchData,
        homeCategory: page,
        homeBool: bools,
      },
    });
  };
  return (
    <HomeBlock>
      <div className="wrapper">
        <div className="title">
          <h1>JS-A6</h1>
        </div>
        <div className="searchInput">
          <input
            placeholder="검색어를 입력하세요"
            name="search"
            value={search}
            onChange={onChange}
            onFocus={onFocus}
            required
          />
        </div>
        <div className="btn">
          <button className="category" value="news" onClick={categories}>
            뉴스
          </button>
          <button className="category" value="blog" onClick={categories}>
            블로그
          </button>
          <button className="category" value="cafearticle" onClick={categories}>
            카페
          </button>
          <button className="category" value="image" onClick={categories}>
            이미지
          </button>
          <button className="category" value="movie" onClick={categories}>
            영화
          </button>
        </div>
      </div>
    </HomeBlock>
  );
};

export default Home;
