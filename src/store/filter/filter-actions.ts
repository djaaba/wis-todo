import { FilterAction, IFilter } from "../../interfaces";
import { SET_FILTER } from "./filter-consts";

export const setFilter = (body: IFilter): FilterAction => ({
	type: SET_FILTER,
	body
})