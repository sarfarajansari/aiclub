import React from "react";
import styled from "styled-components";
import wave from "./wave.svg";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #121212;
  //   background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  padding-top: 20px;
  position: relative;
`;

const Logo = styled.img`
  width: clamp(40px, 17%, 100px);
  margin-left: 6%;
`;

const AiImage = styled.img`
  height: var(--imageHeight);
  margin: 30px 0 0 30px;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 720px) {
    margin-bottom: 20px;
  }
`;

const ContentContainer = styled.div`
  --imageHeight: 30vh;

  grid-column-gap: 10px;
  margin: 0 10px;

  @media screen and (min-width: 720px) {
    --imageHeight: 45vh;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 30% 1fr;
    margin: 0 30px;
    gap: 20px;
  }

  @media screen and (min-width: 960px) {
    --imageHeight: 50vh;

    margin: 0 50px;
    gap: 20px;
  }

  @media screen and (min-width: 10800px) {
    --imageHeight: 60vh;

    margin: 0 70px;
    gap: 20px;
  }
`;

const WaveContainer = styled.div`
  // background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  background: var(--secondary);
  position: absolute;
  bottom: 0px;
  width: 100vw;
  min-height: 150px;
`;

const MainData = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Roboto:wght@700&display=swap");
  // background: #3b3b3b;
  margin: 20px 60px 0 60px;
  min-height: 30vh;
  border-radius: 5px;
  max-width: 700px;
  position: relative;
  z-index: 2;

  .header {
    color: #616161;
    font-size: 2.8rem;
    font-family: "Roboto", sans-serif;
  }

  .header2 {
    color: #b1b1b1;
    font-size: 9.8rem;
    font-family: "Roboto", sans-serif;

    & > span {
      margin-right: 10px;
    }
  }
  .text3 {
    color: #616161;
    font-size: 1.4rem;
  }
  .flex-container {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  @media screen and (min-width: 720px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }
  @media screen and (max-width: 720px) {
    margin: 0 10px;

    .header {
      font-size: 2rem;
    }
    .header2 {
      font-size: 7rem;
    }

    .text3 {
      font-size: 1.1rem;
    }
  }
`;
const Hero = () => {
  return (
    <Container id="home">
      <div>
        <Logo src={`${process.env.PUBLIC_URL}/images/club_logo.png`} />
      </div>

      <ContentContainer>
        <AiImage src={`${process.env.PUBLIC_URL}/images/aiImage5.png`} alt="AI" />
        <MainData>
          <div className="header">A place to share one’s Passion for</div>
          <div className="flex-container">
            <div className="header2">
              <span>A</span>
              <span>I</span>
            </div>

            <div className="text3">
              AI Club is the fastest growing club in VIT Bhopal imparting
              knowledge about AI and pioneering AI based advanced education to
              students.
            </div>
          </div>
        </MainData>
      </ContentContainer>

      <WaveContainer>
        <img src={wave} alt="wave" />
      </WaveContainer>
    </Container>
  );
};

export default Hero;
