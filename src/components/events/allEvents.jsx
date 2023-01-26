import React from "react";
import styled from "styled-components";
import eventsList from "./eventsList.json";

const Container = styled.div`
  position: relative;
  min-height: 400px;
  height: auto;
  overflow: hidden;
  margin: 2rem 0.8rem;
  padding: 0.8rem;
  font-family: Raleway, sans-serif;
  color: #f8f8f9;
  background: #090506;
  background: linear-gradient(to bottom, #090506, #070709);
  text-align: center;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.9);

  min-height: 400px;
  border-radius: 40px;

  @media screen and (min-width: 720px) {
    margin: 2rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: bold;
    margin: 1.5rem 0;
    text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.7);
  }
`;

const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  margin: 0 auto;
  background: #000;
  border-radius: 15px;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);

  .face {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &.face1 {
      box-sizing: border-box;
      padding: 5px;

      h2 {
        margin: 10px;
        padding: 0;
      }

      .text {
        background-color: #fffc00;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    &.face2 {
      transition: 0.5s;

      h2 {
        margin: 0;
        padding: 0;
        font-size: 10em;
        color: #fff;
        transition: 0.5s;
        text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        z-index: 10;
      }
    }
  }

  &:hover .face.face2 {
    height: 60px;

    h2 {
      font-size: 2em;
    }
  }

  & .face.face2 {
    background-image: url("${(props) => props.image}");
    background-size: cover;
    border-radius: 15px;
  }
`;

const CardList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;

`;
const AllEvents = () => {
  return (
    <div id="events">
      <Container>
        <h3>All Events</h3>
        <CardList>
          {eventsList.map((event) => {
            return (
              <CardContainer
                class="card"
                image={`${process.env.PUBLIC_URL}/images/${event.image}`}
              >
                <div class="face face1">
                  <div class="content">
                    <span class="stars"></span>
                    <h2 class="text">{event.name}</h2>
                    <p class="text">{event.details}</p>
                  </div>
                </div>
                <div class="face face2"></div>
              </CardContainer>
            );
          })}
        </CardList>
      </Container>
    </div>
  );
};

export default AllEvents;
