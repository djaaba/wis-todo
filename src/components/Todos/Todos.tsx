import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { TodosProps } from "./Todos.props";

import { selectFilter } from "../../store/filter/filter-selector";
import { toggleTodo } from "../../store/todos/todos-actions";
import {
  selectAllTodos,
  selectFilterTodos,
} from "../../store/todos/todos-selector";

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

  &:hover {
    background: var(--light-blue);
  }
`;

const PTag = styled.p`
  color: var(--blue);
`
export const Todos: React.FC<TodosProps> = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  const todos = useSelector(selectAllTodos);
  const selectTodos = useSelector(() => selectFilterTodos(todos, filter));

  return (
    <TodoList>
      {selectTodos.map((el) => (
        <Link key={el.id} to={`/${el.id}`}>
          <Todo style={{ opacity: el.completed ? "0.5" : "1" }}>
            <input
              type="checkbox"
              checked={el.completed}
              onChange={() => dispatch(toggleTodo(el))}
              onClick={(e) => e.stopPropagation()}
            />
            <PTag
              style={{
                textDecoration: el.completed ? "line-through" : "none",
              }}
            >
              {el.title}
            </PTag>
          </Todo>
        </Link>
      ))}
    </TodoList>
  );
};
