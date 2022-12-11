import axios from 'axios';
import { action, computed, makeAutoObservable, observable, toJS  } from 'mobx'
import { ITasks } from '../interfaces';

class Store {
	@observable tab: 'all' | 'opened' | 'closed' ;
	@observable tasks: ITasks = [];
	isLoading = true;
	 filteredTasks: ITasks;

	constructor() {
		makeAutoObservable(this)

		this.tab = 'all';
		this.filteredTasks = [];
		axios.get(`https://jsonplaceholder.typicode.com/todos`)
			.then(response => this.tasks = toJS(response.data))
			.catch(error => {
				this.tasks = [];
				console.log(error);
			})
			.finally(() => {
				this.isLoading = false;
			})
	}

	@computed
	get sortedTasks(){
		switch (this.tab) {
			case 'opened':
				return this.tasks.slice().filter(task => task.completed ? -1 : 1);
			case 'closed':
				return this.tasks.slice().filter(task => task.completed ? 1 : -1);
			default:
				return this.tasks;
		}
	}

	@action
	set selectedTab(tab:'all' | 'opened' | 'closed') {
		this.tab = tab;
	}
}

export default new Store();
