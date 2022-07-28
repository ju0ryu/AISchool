import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cafe from './Cafe';
import Image from './Image';
import Blog from './Blog';
import News from './News';
import Movie from './Movie';

const Layout = ({ search, page }) => {
  const [itemData, setItemData] = useState('');
  const NaverClienetId = '0_C0gO6RfZqeUrupKHsU';
  const NaverClientSecret = 'JocrPfZsxe';
  const category = page;
  const url = `v1/search/${category}?query=${search}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = axios
          .get(url, {
            params: {
              start: 1, //검색 시작 위치
              display: 10, // 가져올 이미지 갯수
              sort: 'sim', //정렬 유형 (유사도)
            },
            headers: {
              'X-Naver-Client-Id': NaverClienetId,
              'X-Naver-Client-Secret': NaverClientSecret,
            },
          })
          .then((response) => {
            setItemData(response.data.items);
          });
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [page]);

  // if (category === 'cafearticle') {
  //   return (
  //     <div>
  //       {itemData.map((item) => (
  //         <Cafe key={item.link} items={item} />
  //       ))}
  //     </div>
  //   );
  // } else if (category === 'image') {
  //   return (
  //     <div>
  //       {itemData.map((item) => (
  //         <Image key={item.link} items={item} />
  //       ))}
  //     </div>
  //   );
  // } else if (category === 'blog') {
  //   return (
  //     <div>
  //       {itemData.map((item) => (
  //         <Blog key={item.link} items={item} />
  //       ))}
  //     </div>
  //   );
  // } else if (category === 'news') {
  //   return (
  //     <div>
  //       {itemData.map((item) => (
  //         <News key={item.link} items={item} />
  //       ))}
  //     </div>
  //   );
  // }
  return (
    <div>
      {category === 'cafearticle'
        ? itemData.map((items) => <Cafe key={items.link} items={items} />)
        : category === 'image'
        ? itemData.map((items) => <Image key={items.link} items={items} />)
        : category === 'blog'
        ? itemData.map((items) => <Blog key={items.link} items={items} />)
        : category === 'news'
        ? itemData.map((items) => <News key={items.link} items={items} />)
        : category === 'movie'
        ? itemData.map((items) => <Movie key={items.link} items={items} />)
        : null}
    </div>
  );
};

export default Layout;
