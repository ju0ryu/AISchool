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
  const titles = title.replace(/<b>/g, '').replace(/<\/b>/g, '');
  // const descriptions = description.replace(/<b>/g, "").replace(/<\/b>/g, "");
  // const bloggernames = bloggername.replace(/<b>/g, '').replace(/<\/b>/g, '');
  //   const cafeurls = cafeurl.replace(/<b>/g, "").replace(/<\/b>/g, "");

  return (
    <BlogBlock>
      <h2>{titles && <div className="title">{titles}</div>}</h2>
      <h4>{subtitle}</h4>
      <h5>{pubDate}</h5>
      <div>
        <img src={image} />
      </div>
      <div>
        <h4>{userRating}</h4>
      </div>
    </BlogBlock>
  );
};

export default Blog;
