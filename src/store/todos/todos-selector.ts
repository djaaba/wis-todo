import { IFilter } from '../../interfaces';
import { ITodo } from './../../interfaces/Todo';

export const selectAllTodos = (state: any) => state.todos;

export const selectFilterTodos = (state: Array<ITodo>, filter: string) => {
	switch (filter) {
		case 'all':
			return state;
		case 'active':
			return state.filter(todo => !todo.completed);
		case 'completed':
			return state.filter(todo => todo.completed);
		default:
			return state;
	}
}

export const selectSingleTodo = (state: any, id:number) => state.find((todo: any) => todo.id === id)