import styled from "styled-components";

import { Nav, Todos } from "./components";

const H1 = styled.h1`
  font-weight: bold;
  font-size: 40px;
  color: var(--black);
  margin: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const App = (...props: any) => {
  return (
    <>
      <Wrapper>
        <H1>Tasks List</H1>
        <Nav/>
        <Todos/>
      </Wrapper>
    </>
  );
};
