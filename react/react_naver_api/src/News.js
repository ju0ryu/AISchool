import React from "react";
import styled from "styled-components";

const NewsBlock = styled.div`
  box-sizing: border-box;
  padding: 3rem;
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  h2 {
    color: black;
  }
`;

const News = ({ items }) => {
  const { title, link, description } = items;
  const titles = title.replace(/<b>/g, "").replace(/<\/b>/g, "");
  const descriptions = description.replace(/<b>/g, "").replace(/<\/b>/g, "");
  //   const bloggernames = bloggername.replace(/<b>/g, "").replace(/<\/b>/g, "");
  //   const cafeurls = cafeurl.replace(/<b>/g, "").replace(/<\/b>/g, "");

  return (
    <NewsBlock>
      <h2>{titles && <div className="title">{titles}</div>}</h2>
      <div className="description">
        <p>{descriptions}</p>
      </div>
    </NewsBlock>
  );
};

export default News;
