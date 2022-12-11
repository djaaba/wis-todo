export interface ITask{
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export interface ITasks extends Array<ITask>{}