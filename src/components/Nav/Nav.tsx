import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { NavProps } from "./Nav.props";

import { Button } from "..";
import { selectFilter } from "../../store/filter/filter-selector";
import { setFilter } from "../../store/filter/filter-actions";

const Container = styled.div`
  border-radius: 8px;
  border: 1px solid var(--dark-gray);
  overflow: hidden;
`;

export const Nav: React.FC<NavProps> = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Container>
      <Button
        style={{
          background: filter === "all" ? "var(--blue)" : "",
          color: filter === "all" ? "var(--white)" : "",
        }}
        onClick={() => dispatch(setFilter({ filter: "all" }))}
      >
        All
      </Button>
      <Button
        style={{
          background: filter === "active" ? "var(--blue)" : "",
          color: filter === "active" ? "var(--white)" : "",
          borderLeft: "1px solid var(--dark-gray)",
          borderRight: "1px solid var(--dark-gray)",
        }}
        onClick={() => dispatch(setFilter({ filter: "active" }))}
      >
        Active
      </Button>
      <Button
        style={{
          background: filter === "completed" ? "var(--blue)" : "",
          color: filter === "completed" ? "var(--white)" : "",
        }}
        onClick={() => dispatch(setFilter({ filter: "completed" }))}
      >
        Completed
      </Button>
    </Container>
  );
};
