import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';
// 1, 2 로 나눠준 이유는 true false값 (bools라는 state 사용)을 통해 css를 변경하기 위해 만든것
const searchTitle2 = {
  marginTop: '100px',
  fontSize: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const searchTitle = {
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const SearchBlock = {
  padding: '1rem',
  width: '80%',
  margin: '0 auto',
};
const searchBlock2 = {
  margin: 'auto',
  height: '100vh',
  display: 'block',
  alignItems: 'center',
  justifyContent: 'center',
  width: '600px',
};
const Searchinput = {
  display: 'block',
  width: '50%',
  margin: '0 auto',
  padding: '1rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  borderRadius: '0.5rem',
  borderLine: 'solid 1px #ccc',
};
const searchInput2 = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '50px',
  borderRadius: '10px',
  padding: '0 10px',
};
const Searchbtn = {
  textAlign: 'center',
  margin: '0 auto',
  width: '55%',
};
const SearchButton = {
  display: 'inline-block',
  marginTop: '1rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  border: 'none',
  width: '20%',
  padding: '1rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
};
const searchBtn2 = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginLeft: '10px',
};
const searchButton2 = {
  marginTop: '10px',
  border: 'none',
  width: '20%',
  height: '45px',
};

const SearchToggle = () => {
  const [page, setPage] = useState('news');
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState('인터스텔라');
  const [bools, setBools] = useState(false);

  //포커스될때 값 초기화
  const onFocus = (e) => {
    setSearch('');
  };
  // input 창에 값을 Search state에 저장
  const onChange = (e) => {
    setSearch(e.target.value);
    setSearchData(search);
  };
  // 카테고리를 선택할때 page state에 카테고리 value를 저장하고 bools 값을 true로 변경
  const categories = (e) => {
    setPage(e.target.value);
    setSearchData(search);
    setBools(true);
  };
  return (
    // 3항 연산자를 통해 스타일을 변경
    <div className="wrapper" style={bools ? SearchBlock : searchBlock2}>
      <div className="title" style={bools ? searchTitle : searchTitle2}>
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
          style={bools ? Searchinput : searchInput2}
        />
      </div>
      <div className="btn" style={bools ? Searchbtn : searchBtn2}>
        <button
          style={bools ? SearchButton : searchButton2}
          className="category"
          value="news"
          onClick={categories}
        >
          뉴스
        </button>
        <button
          style={bools ? SearchButton : searchButton2}
          className="category"
          value="blog"
          onClick={categories}
        >
          블로그
        </button>
        <button
          style={bools ? SearchButton : searchButton2}
          className="category"
          value="cafearticle"
          onClick={categories}
        >
          카페
        </button>
        <button
          style={bools ? SearchButton : searchButton2}
          className="category"
          value="image"
          onClick={categories}
        >
          이미지
        </button>
        <button
          style={bools ? SearchButton : searchButton2}
          className="category"
          value="movie"
          onClick={categories}
        >
          영화
        </button>
      </div>
      {/* 저장된  page ,search , bools 값을 Layout으로 전달 */}
      <Layout search={searchData} page={page} bools={bools} />
    </div>
  );
};
export default SearchToggle;
