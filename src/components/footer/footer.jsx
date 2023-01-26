import React from "react";
import styled from "styled-components";
import { FaDiscord } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const Container = styled.div`
  padding: 10px;
  background: var(--primary);
  width: 100vw;

  h1 {
    text-align: center;
    color: white;
  }

  display: grid;
  justify-content: center;
`;

const MainContainer = styled.div`
  width: 350px;

  min-height: 200px;

  .social {
    display: flex;
    justify-content: space-around;
    color: white;
    margin: 10px 0;

    svg {
      color: var(--secondary);
      font-size: 30px;

      &:hover {
        color: white;
      }
    }
  }

  .text {
    color: var(--secondary);
    text-align: center;
    font-size: 1.2rem;
    margin: 10px;
  }
`;
const Footer = () => {
  return (
    <Container id="contactus">
      <h1>Contact Us</h1>
      <MainContainer>
        <div className="social">
          <a href="https://discord.gg/CnhaxT8k">
            <FaDiscord />
          </a>
          <a href="https://www.instagram.com/aiclub.vitb/?hl=en">
            <AiOutlineInstagram />
          </a>
          <a href="https://github.com/aiclubvitbhopal">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/company/aiclub-vitb/mycompany/">
            <AiFillLinkedin />
          </a>
        </div>

        <div className="text">Made with ❤️ Sarfaraj Ansari</div>
        <div className="text">Copyright © 2023 AI Club - VIT Bhopal</div>
      </MainContainer>
    </Container>
  );
};

export default Footer;
