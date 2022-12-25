export interface ITodo {
	userId: number,
	id: number
	title: string,
	completed: boolean
}

export type TodoAction = {
	type: "TOGGLE_TODO" | "REMOVE_TODO" | "ADD_TODO"
	body: ITodo
}
