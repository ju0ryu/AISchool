import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cafe from './Cafe';
import Image from './Image';
import Blog from './Blog';
import News from './News';
import Movie from './Movie';

const Layout = ({ search, page, bools }) => {
  const [itemData, setItemData] = useState('');
  const NaverClienetId = '0_C0gO6RfZqeUrupKHsU';
  const NaverClientSecret = 'JocrPfZsxe';
  // page 값을 카테고리에 저장
  const category = page;
  // 저장된 카테고리와 search 값을 url에 대입
  const url = `v1/search/${category}?query=${search}`;

  // api 연결
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = axios
          .get(url, {
            params: {
              start: 1, //검색 시작 위치
              display: 25, // 가져올 이미지 갯수
              sort: 'sim', //정렬 유형 (유사도)
            },
            headers: {
              'X-Naver-Client-Id': NaverClienetId,
              'X-Naver-Client-Secret': NaverClientSecret,
            },
          })
          .then((response) => {
            //api 받아온 데이터를 items별로 itemsData에 저장
            setItemData(response.data.items);
          });
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [page]);
  return (
    // 카테고리값에 부합하는 이름과 bools 값이 true일때 itemData 값을 각각의 컴포넌트로
    // 전달하기위해 3항 연산을 중첩하여 사용
    <div>
      {category === 'cafearticle' && bools
        ? itemData.map((items) => <Cafe key={items.link} items={items} />)
        : category === 'image' && bools
        ? itemData.map((items) => <Image key={items.link} items={items} />)
        : category === 'blog' && bools
        ? itemData.map((items) => <Blog key={items.link} items={items} />)
        : category === 'news' && bools
        ? itemData.map((items) => <News key={items.link} items={items} />)
        : category === 'movie' && bools
        ? itemData.map((items) => <Movie key={items.link} items={items} />)
        : null}
    </div>
  );
};

export default Layout;
