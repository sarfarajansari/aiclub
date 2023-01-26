import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";
import { goto } from "./gotoSection";

const Container = styled.div`
  @media screen and (min-width: 720px) {
    display: none;
  }
`;
const IconContainer = styled.div`
  position: fixed;
  right: 6%;
  top: 20px;
  z-index: 42;
  cursor: pointer;

  svg {
    color: white;
    font-size: clamp(40px, 17%, 100px);
  }
`;

const SidebarContainer = styled.div`
  position: fixed;
  color: white;
  z-index: 41;
  top: 0;
  right: 0;
  left: ${(props) => (props.active ? "0" : "100vw")};
  right: ${(props) => (props.active ? "0" : "-100px")};
  bottom: ${(props) => (props.active ? "0" : "100vh")};
  overflow: hidden;
  // background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  background: var(--secondary);

  transition: 300ms;

  display: grid;
  align-items: center;
`;

const PageLink = styled.div`
  font-size: 25px;
  cursor: pointer;
  &:hover {
    background: -webkit-linear-gradient(#0dc6c2, #fc9107);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 15px;
`;
const routes = ["Home", "Advitya", "Events", "Contact Us"];
const Sidebar = () => {
  const [active, setActive] = useState(false);

  const onClickLink = (route) => {
    setActive(false);
    goto(route);
  };
  return (
    <Container>
      <IconContainer onClick={() => setActive(!active)}>
        {active ? <IoMdClose /> : <GiHamburgerMenu />}
      </IconContainer>

      <SidebarContainer active={active}>
        <LinkContainer>
          {routes.map((route) => (
            <PageLink onClick={onClickLink}>{route}</PageLink>
          ))}
        </LinkContainer>
      </SidebarContainer>
    </Container>
  );
};

export default Sidebar;
