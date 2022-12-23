import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "./components";
import { getId } from "./utils";

import { setFilter } from "./store/filter/filter-actions";
import { selectFilter } from "./store/filter/filter-selector";
import {
  selectAllTodos,
  selectFilterTodos,
} from "./store/todos/todos-selector";
import { toggleTodo } from "./store/todos/todos-actions";

const H1 = styled.h1`
  font-weight: bold;
  font-size: 40px;
  color: var(--black);
  margin: 15px;
`;

const Container = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskList = styled.ul`
  width: 100%;
  color: var(--blue);
`;

const Task = styled.li`
  background: var(--light-gray);
  margin: 20px 0;
  padding: 20px;
  display: flex;
  column-gap: 20px;
  cursor: pointer;
`;

export const App = (...props: any) => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  const todos = useSelector(selectAllTodos);
  const selectTodos = useSelector((state) => selectFilterTodos(todos, filter));

  return (
    <>
      <Wrapper>
        <H1>Tasks List</H1>
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
        <TaskList>
          {selectTodos.map((el) => (
            <Task key={getId()} style={{ opacity: el.completed ? "0.5" : "1" }}>
              <input
                type="checkbox"
                checked={el.completed}
                onChange={() => dispatch(toggleTodo(el))}
              />
              <p
                style={{
                  textDecoration: el.completed ? "line-through" : "none",
                }}
              >
                {el.title}
              </p>
            </Task>
          ))}
        </TaskList>
      </Wrapper>
    </>
  );
};
