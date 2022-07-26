import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import NewsList from './../components/NewsList';
import React from 'react';

const NewsPage = () => {
  const params = useParams();
  const category = params.category || 'all';
  return (
    <div>
      <Categories />
      <NewsList category={category} />
    </div>
  );
};

export default NewsPage;
