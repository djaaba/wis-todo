import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { toggleTodo } from "../../store/todos/todos-actions";
import { useDispatch, useSelector } from "react-redux";

import { TodoItemProps } from "./TodoItem.props";
import { getQuery } from "../../utils";
import {
  selectAllTodos,
  selectSingleTodo,
} from "../../store/todos/todos-selector";

export const TodoItem: React.FC<TodoItemProps> = () => {
  const query: number = getQuery();

  const dispatch = useDispatch();
  const todos = useSelector(selectAllTodos);
  const todo = useSelector(() => selectSingleTodo(todos, query));

  const {id, title, completed} = todo;
  
  return (
    <Container>
      <Padding>
        <Header>
          <H2Tag>Task#{id}</H2Tag>
          <Link to="/">
            <ATag>Back to TodoList</ATag>
          </Link>
        </Header>
      </Padding>
      <Content>
        <Padding>
          <PTag>{title}</PTag>
        </Padding>
      </Content>
      <Footer>
        <Padding>
          <Wrapper>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => dispatch(toggleTodo(todo))}
            />
            <PTagDecorated>opened</PTagDecorated>
          </Wrapper>
        </Padding>
      </Footer>
    </Container>
  );
};

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  border-top: 1px solid var(--gray);
  border-bottom: 1px solid var(--gray);
  height: 60vh;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  background: var(--white);
  max-width: 1000px;
  margin: 50px auto;
  height: 100%;
  border-radius: 2px;
`;

const Wrapper = styled.div`
  display: flex;
  column-gap: 10px;
`;

const Padding = styled.div`
  padding: 15px;
`;

const ATag = styled.p`
  color: var(--blue);
`;

const fontSize = css`
  font-size: 18px;
`;

const PTag = styled.p`
  ${fontSize}
`;

const PTagDecorated = styled.p`
  ${fontSize};
  text-transform: uppercase;
`;

const H2Tag = styled.h2`
  font-weight: 600;
  font-size: 20px;
`;
