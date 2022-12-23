export interface IFilter {
	filter: 'all' | 'active' | 'completed'
}

export type FilterAction = {
	type: 'SET_FILTER',
	body: IFilter
}