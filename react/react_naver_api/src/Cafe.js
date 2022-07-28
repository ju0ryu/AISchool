import React from 'react';
import styled from 'styled-components';

const CafeBlock = styled.div`
  box-sizing: border-box;
  padding: 3rem;
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  h2 {
    color: black;
  }
`;

const Cafe = ({ items }) => {
  const { title, link, description, cafename, cafeurl } = items;
  const titles = title.replace(/<b>/g, '').replace(/<\/b>/g, '');
  // const descriptions = description.replace(/<b>/g, "").replace(/<\/b>/g, "");
  // const cafenames = cafename.replace(/<b>/g, '').replace(/<\/b>/g, '');
  // const cafeurls = cafeurl.replace(/<b>/g, '').replace(/<\/b>/g, '');

  return (
    <CafeBlock>
      <h2>{titles && <div className="title">{titles}</div>}</h2>
      <div className="description">
        <p>{description}</p>
      </div>
      <div>
        {/* <h4>{cafenames !== null ? cafenames : thumbnail}</h4> */}
        <h4>{cafename}</h4>
        <span>
          <a href={link} target="_blank" rel="noopener noreferrer" />
        </span>
      </div>
    </CafeBlock>
  );
};

export default Cafe;
