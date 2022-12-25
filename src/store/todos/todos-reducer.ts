import { ITodo, TodoAction } from "../../interfaces";


export const todos = (state: Array<ITodo> = [], action: TodoAction) => {
	switch (action.type) {
		case "TOGGLE_TODO": {
			return state.map(todo =>
				todo.id === action.body.id ? {
					...todo,
					completed: !todo.completed
				} : todo)
		}
		case "ADD_TODO": {
			return [
				...state,
				action.body
			]
		}
		default:
			return state;
	}
}