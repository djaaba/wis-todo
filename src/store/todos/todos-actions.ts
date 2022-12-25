import { ITodo, TodoAction } from "../../interfaces";
import { TOGGLE_TODO, ADD_TODO } from "./todos-consts";

export const toggleTodo = (body: ITodo): TodoAction => ({
	type: TOGGLE_TODO,
	body
})

export const addTodo = (body: ITodo): TodoAction => ({
	type: ADD_TODO,
	body
})