import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Routes, Route } from 'react-router-dom';

import { TodosProps } from "./Todos.props";

import { selectFilter } from "../../store/filter/filter-selector";
import { toggleTodo } from "../../store/todos/todos-actions";
import { selectAllTodos, selectFilterTodos } from "../../store/todos/todos-selector";
import { getId } from './../../utils/uniqId';

const TodoList = styled.ul`
  width: 100%;
  color: var(--blue);
`;

const Todo = styled.li`
  background: var(--light-gray);
  margin: 20px 0;
  padding: 20px;
  display: flex;
  column-gap: 20px;
  cursor: pointer;
`;

export const Todos: React.FC<TodosProps> = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  const todos = useSelector(selectAllTodos);
  const selectTodos = useSelector((state) => selectFilterTodos(todos, filter));
  
  return (
    <TodoList>
      {selectTodos.map((el) => (
        <Todo key={getId()} style={{ opacity: el.completed ? "0.5" : "1" }}>
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
        </Todo>
      ))}
    </TodoList>
  );
};
