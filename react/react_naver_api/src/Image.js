import React from "react";
import styled from "styled-components";

const ImageBlock = styled.div`
  box-sizing: border-box;
  padding: 3rem;
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  h2 {
    color: black;
  }
`;

const Image = ({ items }) => {
  const { title, link, thumbnail, sizeheight, sizewidth } = items;
  const titles = title.replace(/<b>/g, "").replace(/<\/b>/g, "");

  return (
    <ImageBlock>
      <h2>{titles && <div className="title">{titles}</div>}</h2>
      <div className="image">
        <a href={link}>
          <img src={thumbnail} />
        </a>
      </div>
    </ImageBlock>
  );
};

export default Image;
