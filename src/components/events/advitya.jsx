import React from "react";
import { Button, Carousel, Timeline } from "antd";
import advityaData from "./advityaData.json";

import { Card } from "antd";
import styled from "styled-components";

const Container = styled.div`
  .logo {
    display: flex;

    justify-content: center;
    img {
      width: clamp(300px, 70vw, 500px);
    }
    margin-bottom: 20px;
  }

  .carousel-item {
    display: inline-grid !important;
    width: 100%;
    justify-content: center;
  }
  .custom-card {
    position: relative;
    width: clamp(300px, 70vw, 800px) !important;
    min-height: 400px;
    height: auto;
    overflow: hidden;
    margin: 2rem;
    padding: 2rem;
    font-family: Raleway, sans-serif;
    color: #f8f8f9;
    background: #090506;
    background: linear-gradient(to bottom, #090506, #070709);
    text-align: center;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.9);

    & > div:first-child {
      margin-bottom: 20px;
    }

    @media screen and (min-width: 720px) {
      display: grid;
      grid-template-columns: 1fr 1fr;

      & > div.data {
        font-size: 1.5rem;
      }
    }

    & > div.data {
      display: grid;
      grid-template-columns: 35% 1fr;
      grid-row-gap: 10px;
      color: white;
      & > div:first-child {
        color: #e0e0e0;
      }
    }
  }
`;
const Advitya = () => {
  return (
    <Container id="advitya">
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/images/Advitya Logo.png`} />
      </div>

      <Carousel autoplay>
        {advityaData.map((event) => (
          <div className="carousel-item">
            <div className="custom-card">
              <Card
                bordered={false}
                style={{ width: "clamp(10rem,60vw,18rem)" }}
                cover={
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${event.name}.png`}
                  />
                }
              >
                {" "}
                {/* <h3>{event.name}</h3> */}
                <Button type="primary" onClick={() => window.open(event.url)}>
                  Register Now
                </Button>
              </Card>
              <div className="data">
                <div>Date : </div>
                <div>{event.date}</div>
                <div>mode : </div>
                <div>{event.date}</div>

                <div>Participation : </div>
                <div>{event.participation}</div>

                <div>Duration : </div>
                <div>{event.duration}</div>

                <div>Fee : </div>
                <div>{event.registrationFee}</div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default Advitya;
