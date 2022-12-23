import { ITodo, TodoAction } from "../../interfaces";

let el = { userId: 1, id: 1, title: 'hahar', completed: false }
let el2 = { userId: 1, id: 2, title: 'aboba', completed: true }



export const todos = (state: Array<ITodo> = [el, el2], action: TodoAction) => {
	switch (action.type) {
		case "TOGGLE_TODO": {
			return state.map(todo =>
				todo.id === action.body.id ? {
					...todo,
					completed: !todo.completed
				} : todo)
		}
		default:
			return state;
	}
}