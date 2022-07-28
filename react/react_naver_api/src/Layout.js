import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cafe from './Cafe';
import Image from './Image';
import Blog from './Blog';
import News from './News';

const Layout = ({ search, page }) => {
  const [data, setData] = useState(null);
  console.log('search ===================================' + search);
  console.log('page =====================================' + page);
  const NaverClienetId = '0_C0gO6RfZqeUrupKHsU';
  const NaverClientSecret = 'JocrPfZsxe';
  const category = page;
  const url = `v1/search/${category}?query=${search}`;
  console.log(url);

  useEffect(() => {
    console.log('check ==================================');
    const fetchData = async () => {
      try {
        const response = axios
          .get(url, {
            params: {
              // query: { search },
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
            setData(response.data.items);
          });
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [page]);

  if (category === 'cafearticle') {
    return (
      <div>
        {data.map((item) => (
          <Cafe key={item.link} items={item} />
        ))}
      </div>
    );
  } else if (category === 'image') {
    return (
      <div>
        {data.map((item) => (
          <Image key={item.link} items={item} />
        ))}
      </div>
    );
  } else if (category === 'blog') {
    return (
      <div>
        {data.map((item) => (
          <Blog key={item.link} items={item} />
        ))}
      </div>
    );
  } else if (category === 'news') {
    return (
      <div>
        {data.map((items) => (
          <News key={items.link} items={items} />
        ))}
      </div>
    );
  }
  // return (
  //   <div>
  //     {console.log('data : ' + data)}
  //     {console.log('page : ' + category)}
  //     {console.log(typeof category)}
  //     {category === 'cafearticle'
  //       ? data.map((items) => <Cafe key={items.link} items={items} />)
  //       : category === 'image'
  //       ? data.map((items) => <Image key={items.link} items={items} />)
  //       : category === 'blog'
  //       ? data.map((items) => <Blog key={items.link} items={items} />)
  //       : category === 'news'
  //       ? data.map((items) => <News key={items.link} items={items} />)
  //       : null}
  //   </div>
  // );
};

export default Layout;
