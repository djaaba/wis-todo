import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";

import { MainProps } from "./Main.props";

import { Nav, Todos } from "../../components";
import { ITodo } from "../../interfaces";
import { addTodo } from "../../store/todos/todos-actions";

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

export const Main: React.FC<MainProps> = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    axios
		.get(`https://jsonplaceholder.typicode.com/todos`)
		.then((res) => 
			res.data.forEach((el: ITodo) => {
				dispatch(addTodo(el))
			})
		)
		.catch((error) => {
			console.log(error);
		})
  }, [])

  return (
    <>
      <Wrapper>
        <H1>Tasks List</H1>
        <Nav />
        <Todos />
      </Wrapper>
    </>
  );
};