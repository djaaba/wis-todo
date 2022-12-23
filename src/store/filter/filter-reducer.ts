import { FilterAction } from "../../interfaces";


export const filter = (state: 'all' | 'active' | 'completed' = 'all', action: FilterAction) => {
	switch (action.type) {
		case "SET_FILTER":
			return action.body.filter
		default:
			return state;
	}
}