import React from 'react';
import styled from 'styled-components';

const BlogBlock = styled.div`
  box-sizing: border-box;
  padding: 3rem;
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  h2 {
    color: black;
  }
`;

const Blog = ({ items }) => {
  const { title, link, image, subtitle, pubDate, director, actor, userRating } =
    items;
  return (
    <BlogBlock>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      <h4>{subtitle}</h4>
      <h5>{pubDate}</h5>
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} />
        </a>
      </div>
      <div>
        <h4>평점 : {userRating}</h4>
      </div>
    </BlogBlock>
  );
};

export default Blog;
