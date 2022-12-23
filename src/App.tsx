import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { Button } from "./components";
import { getId } from "./utils";

import { setFilter } from "./store/filter/filter-actions";
import { selectFilter } from "./store/filter/filter-selector";
import {
  selectAllTodos,
  selectFilterTodos,
} from "./store/todos/todos-selector";
import { ITasks } from "./interfaces";
import { toggleTodo } from "./store/todos/todos-actions";

const H1 = styled.h1`
  font-weight: bold;
  font-size: 40px;
  color: var(--black);
  margin: 15px;
`;

const Container = styled.div`
  border-radius: 5px;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskList = styled.ul`
  width: 100%;
`;

const Task = styled.li`
  background: var(--light-gray);
  margin: 20px 0;
  padding: 20px;
`;

export const App = (...props: any) => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const todos = useSelector(selectAllTodos);

  const selectTodos = useSelector((state) => selectFilterTodos(todos, filter));

  // let tasks: ITasks = [];
  // let isLoading = true;

  useEffect(() => {
    console.log(selectTodos);
    // axios
    //   .get(`https://jsonplaceholder.typicode.com/todos`)
    //   .then((response) => (tasks = response.data))
    //   .catch((error) => {
    //     tasks = [];
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     isLoading = false;
    //   });
  }, [filter]);

  return (
    <>
      <Wrapper>
        <H1>Tasks List: {filter}</H1>
        <Container>
          <Button onClick={() => dispatch(setFilter({ filter: "all" }))}>
            All
          </Button>
          <Button onClick={() => dispatch(setFilter({ filter: "active" }))}>
            Active
          </Button>
          <Button onClick={() => dispatch(setFilter({ filter: "completed" }))}>
            Completed
          </Button>
        </Container>
        <TaskList>
          {selectTodos.map((el) => (
            <Task key={getId()}>
              <input
                type="checkbox"
                checked={el.completed}
                onChange={() => dispatch(toggleTodo(el))}
              />
              <p>{el.title}</p>
            </Task>
          ))}
        </TaskList>
      </Wrapper>
    </>
  );
};
