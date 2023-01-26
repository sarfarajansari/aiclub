import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {goto} from "./gotoSection"
const Container = styled.div`
  display: flex;
  justify-content: center;
  height: clamp(50px, 22%, 100px);
  align-items: center;

  position: fixed;
  top: 0px;

  color: white;
  width: 100vw;
  gap: 30px;
  z-index: 40;

  @media screen and (max-width: 720px) {
    display: none;
  }

  background: ${(props) => (props.active ? "#121212" : "none")};
`;

const PageLink = styled.div`
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: -webkit-linear-gradient(#0dc6c2, #fc9107);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const routes = ["Home", "Advitya", "Events", "Contact Us"];
const Navbar = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setActive(window.scrollY > 500);
    };
  }, []);
  return (
    <div>
      <Container active={active}>
        {routes.map((route) => (
          <PageLink onClick={()=>goto(route)}>{route}</PageLink>
        ))}
      </Container>
    </div>
  );
};

export default Navbar;
