import React from 'react';
import styled from 'styled-components';

const BlogBlock = styled.div`
  margin: 0 auto;
  padding: 3rem;
  box-sizing: border-box;
  width: 80%;
  margin-top: ;
  background-color: #fafbfc;
  section {
    min-height: 30vh;
  }
  .container {
    position: relative;
    width: 80%;
    height: 40vh;
    overflow: hidden;
    left: 8%;
  }
  .bubbles {
    position: relative;
    display: flex;
    border-top: 1px solid #f1f4f6;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: rgb(241, 244, 246);
  }
  .bubbles span {
    position: relative;
    width: 40px;
    height: 30px;
    background: #4fc3dc;
    margin: 0 10px;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #4fc3dc44, 0 0 50px #4fc3dc, 0 0 100px #4fc3dc;
    animation: animate 7s linear infinite;
    animation-duration: calc(10s / var(Blog));
  }
  .bubbles span:nth-child(1) {
    background: #ff2d75;
    box-shadow: 0 0 0 10px #ff2d7544, 0 0 50px #ff2d75, 0 0 100px #ff2d75;
  }
  @keyframes animate {
    0% {
      transform: translateY(30vh) scale(0);
    }
    100% {
      transform: translateY(-10vh) scale(1);
    }
  }
  h2 {
    color: black;
  }
  .ul {
    list-style: none;
  }

  a :hover {
    color: #0c43b7;
    cursor: pointer;
  }
`;

const Blog = ({ items }) => {
  const { title, link, description, bloggername, bloggerlink, postdate } =
    items;

  return (
    <BlogBlock>
      <section>
        <div className="container">
          <div class="bubbles">
            <span></span>
            {/* 
            <span style="--i:16;"></span>
            <span style="--i:19;"></span>
            <span style="--i:20;"></span>
            <span style="--i:22;"></span>
            <span style="--i:25;"></span>
            <span style="--i:18;"></span>
            <span style="--i:21;"></span>
            <span style="--i:15;"></span>
            <span style="--i:13;"></span>
            <span style="--i:26;"></span>
            <span style="--i:17;"></span>
            <span style="--i:13;"></span>
            <span style="--i:28;"></span> */}

            <ul className="ul">
              <li>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <h2 dangerouslySetInnerHTML={{ __html: title }} />
                </a>
              </li>

              <li>
                <div className="description">
                  <p dangerouslySetInnerHTML={{ __html: description }} />
                </div>
              </li>
            </ul>
            <span></span>
          </div>
        </div>
      </section>
    </BlogBlock>
  );
};

export default Blog;
