import { ITodo, TodoAction } from "../../interfaces";
import { TOGGLE_TODO } from "./todos-consts";


export const toggleTodo = (body: ITodo): TodoAction => ({
	type: TOGGLE_TODO,
	body
})
