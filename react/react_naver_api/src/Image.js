import React from 'react';
import styled from 'styled-components';

const ImageBlock = styled.div`
  box-sizing: border-box;
  padding: 3rem;
  width: 80%;
  margin: 0 auto;
  margin-top: 1rem;
  h2 {
    color: black;
  }
  .image {
    display: inline-block;
  }
  img {
    display: inline-block;
    width: 200px;
    height: 250px;
  }
`;

const Image = ({ items }) => {
  const { title, link, thumbnail, sizeheight, sizewidth } = items;
  const titles = title.replace(/<b>/g, '').replace(/<\/b>/g, '');

  return (
    <ImageBlock>
      <div className="image">
        <a href={link}>
          <img src={thumbnail} />
        </a>
        <span>{titles && <div className="title">{titles}</div>}</span>
      </div>
    </ImageBlock>
  );
};

export default Image;
