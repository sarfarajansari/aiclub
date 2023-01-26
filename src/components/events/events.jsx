import React from "react";
import styled from "styled-components";
import Advity from "./advitya";
import AllEvents from "./allEvents";

const Container = styled.div`
  min-height: 600px;
  background: var(--secondary);
  width: 100vw;
  overflow: hidden;
`;
const Events = () => {
  return (
    <div>
      <Container>
        <Advity />
        <AllEvents />
      </Container>
    </div>
  );
};

export default Events;
